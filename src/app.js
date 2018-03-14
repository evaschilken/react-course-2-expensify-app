import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill from last month',
    note: 'water bill',
    amount: 255,
    createdAt: 4500
}));
store.dispatch(addExpense({
    description: 'Gas bill from last month',
    note: 'gas bill',
    amount: 176,
    createdAt: 1000
}));
store.dispatch(addExpense({
    description: 'Rent Melbs',
    note: 'rent',
    amount: 10076
}));

const state = store.getState();
const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('filteredExpenses', filteredExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));