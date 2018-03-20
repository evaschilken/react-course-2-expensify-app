import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={1200} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={1240099} />);
    expect(wrapper).toMatchSnapshot();
});
