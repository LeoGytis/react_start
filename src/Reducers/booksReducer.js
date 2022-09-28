function booksReducer(state, action) {
    let newState;
    newState = state;

    switch (action.type) {
        case "new_list":
            newState = action.payload.map((b, i) => ({ ...b, row: i }));
            break;
            default:
                newState = [...state];
        }

    return newState;
}

export default booksReducer;
