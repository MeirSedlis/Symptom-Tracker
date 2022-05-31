const editReducer = (state = [], action) => {
    if (action.type === 'SET_INTENSITY'){
        return action.payload
    } return state
}

export default editReducer;