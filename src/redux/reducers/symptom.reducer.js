const symptomReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SYMPTOM':
          return action.payload;
        case 'UNSET_SYMPTOM':
          return [];
        default:
          return state;
      }
    };

    export default symptomReducer;