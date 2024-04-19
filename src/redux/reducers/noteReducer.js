const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.payload);
    case 'EDIT_NOTE':
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, content: action.payload.newContent }
          : note
      );
    default:
      return state;
  }
};

export default noteReducer;
