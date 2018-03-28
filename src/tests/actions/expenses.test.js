import { editExpense, removeExpense, addExpense, startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


test('should return the reomve action object', () => {
    const actionObj = removeExpense( { id : '123abc' });
    expect(actionObj).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should return editExepnse action object', () => {
    const actionObj = editExpense('abc124', {
        note : 'this is the edit'
    });
    expect(actionObj).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc124',
        edit: {
            note: 'this is the edit'
        }
    });
});

test('should return add expense object with provided values', () => {
    expect(addExpense(expenses[2])).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 300,
        note: 'this one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});


// test('should return add expense object with default values', () => {
//     expect(addExpense()).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// });