const savingsReducerDefaultState = [];

const savingsReducer = (state = savingsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SAVING':
      return [
        ...state,
        action.saving
      ];
    case 'REMOVE_SAVING':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_SAVING':
      return state.map((saving) => {
        if (saving.id === action.id) {
          return {
            ...saving,
            ...action.updates
          };
        } else {
          return saving;
        };
      });
      case 'SET_SAVINGS':
      return action.savings;
    default:
      return state;
  }
};


export default savingsReducer;