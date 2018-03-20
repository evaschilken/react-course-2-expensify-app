import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.expenses.length === 1 ? (
                `Viewing ${props.expenses.length} expense `
            ) : (
                `Viewing ${props.expenses.length} expenses `
            )
        }
        totalling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);