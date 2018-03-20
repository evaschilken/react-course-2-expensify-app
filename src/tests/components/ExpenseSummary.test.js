import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});
