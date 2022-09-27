function colorReducer(state, action) {
    let newState;

    newState = state;

    switch (action.type) {
        case "go_pink":
            newState = "pink";
            break;
        default:
            newState = state;
    }

    return newState;
}

export default colorReducer;
