//Reducer---> is a function that takes an old state and an action(specifies how we want to change the state) return new state
// const transactions = [{id:1}, {id:2}]


const contextReducer = (state, action) => {
    let transactions;
    switch(action.type){
        case "DELETE_TRANSACTION":
            transactions = state.filter(el=> el.id !== action.payload);
            return transactions;
            break;

        case "ADD_TRANSACTION":
            transactions = [action.payload, ...state]
            // transactionAdded = action.payload
            return transactions;
            break;

        default:
        return state;
    }

}

export default contextReducer;