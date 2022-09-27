import rand from "../Functions/randomNumber";

function numberReducer(state, action) {
    let newState;
    newState = state;

    switch (action.type) {
        case "change_number":
            newState = rand(0, 9999);
            // newState = ('' + rand(0, 1000)).padStart(4, '0');
            break;
        case "do2":
            newState = ("" + action.payload).padStart(4, 0);
            break;
        case "change_text":
            newState = action.payload;
            break;
        default:
            newState = state;
    }

    return newState;
}

export default numberReducer;
