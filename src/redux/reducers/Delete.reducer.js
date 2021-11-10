

const deleteReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ITEMS':
            return action.payload
        default: 
            return state;
    }
};

export default deleteReducer;