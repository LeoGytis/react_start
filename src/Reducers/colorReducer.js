function colorReducer(state, action) {
    let newState;

    newState = state;

    switch (action.type) {
        case "go_pink":
            newState = "pink";
            break;
        case "go_yellow":
            newState = "yellow";
            break;
        case "change_color":
            newState = state === "yellow" ? "pink" : "yellow";
            break;
        default:
            newState = state;
    }

    return newState;
}

export default colorReducer;
