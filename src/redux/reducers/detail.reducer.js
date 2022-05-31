const detailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
          return action.payload;
        case 'UNSET_DETAIL':
          return [];
        default:
          return state;
      }
    }

    export default detailReducer;