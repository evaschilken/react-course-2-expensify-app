const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE':   
            console.log("action.edit", action.edit);
            return state.map((expense) => {
                if (action.id === expense.id) {
                    return {
                        ...expense,
                        ...action.edit
                    }
                } else {
                    return expense
                }
            })
            return [
                ...state,
                action.expense
            ]
        default:
            return state;
    }
};

