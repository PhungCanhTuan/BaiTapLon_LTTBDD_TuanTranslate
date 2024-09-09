    const initialState = {
        words: [],
    };
  
    const wordReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'ADD_WORD':
            return {
            ...state,
            words: [...state.words, action.payload],
            };
        default:
            return state;
        }
    };
  
export default wordReducer;