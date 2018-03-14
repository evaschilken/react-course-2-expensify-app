import { createStore } from 'redux';

//action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementCount = ({ decrementBy = 1} = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
);

const resetCount = () => (
    {
        type: 'RESET'
    }
);

const setCount = ({ count } = {}) => (
    {
        type: 'SET',
        count
    }
);

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = {count:0}, action) => {
    console.log(action.type)
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            let amount2 = typeof action.by === 'number' ? action.by : 1;
            return {
                count: state.count - amount2
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(setCount({count: 505}));
