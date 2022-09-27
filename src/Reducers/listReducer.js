import rand from "../Functions/randomNumber";

function listReducer(state, action) {
    let newState;
    newState = state;

    switch (action.type) {
        case "new_list":
            newState = [];
            for (let i = 0; i < 10; i++) {
                newState.push(("" + rand(0, 9999)).padStart(4, 0));
            }
            break;

        default:
            newState = state;
    }

    return newState;
}

export default listReducer;
