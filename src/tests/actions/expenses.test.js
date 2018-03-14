import { editExpense, removeExpense, addExpense} from '../../actions/expenses';

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
    const data = {
        description: "some desc",
        note: "'some note'",
        amount: 12389,
        createdAt: 1000
    }
    expect(addExpense(data)).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...data,
            id: expect.any(String)
        }
    })
});

test('should return add expense object with default values', () => {
    expect(addExpense()).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});