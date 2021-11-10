const shelfReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.payload;
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export default shelfReducer;
