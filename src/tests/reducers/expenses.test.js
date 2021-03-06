import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'tea',
        amount: 400,
        note: '',
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const edit = {
        description: 'Rent for berlin',
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        edit
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(edit.description);
});

test('should not edit an expense if id not found', () => {
    const edit = {
        description: 'Rent for berlin',
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        edit
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const expenses1 = [
        expenses[0],
        expenses[1]
    ];
    const expenses2 = [
        expenses[1],
        expenses[2]
    ];
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses1
    }
    const state = expensesReducer(expenses2, action);
    expect(state).toEqual(expenses1);
});