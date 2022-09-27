import randomColor from "../Functions/randomColor";
import randomNumber from "../Functions/randomNumber";

function listReducer(state, action) {
    let newState;
    newState = state;

    switch (action.type) {
        case "new_list":
            newState = [];
            for (let i = 0; i < 10; i++) {
                // const obj = {number: randomNumber(0, 1000), color: 'green'};
                // newState.push(("" + rand(0, 9999)).padStart(4, 0));
                // newState.push(randomNumber(0, 1000));
                // newState.push(obj);
                newState.push({
                    number: randomNumber(0, 1000),
                    color: randomColor(),
                    show: true,
                    row: i,
                });
            }
            break;
        case "sort":
            newState = [...state].sort((a, b) => {
                return a.number - b.number;
            });
            break;

        case "more500":
            // newState = [...state].filter((a) => {return a.number > 500;});  // netinka kad nes itrina lista
            newState = state.map((o) =>
                o.number > 500 ? { ...o, show: true } : { ...o, show: false }
            );

            break;

        case "less400":
            // newState = [...state].filter((a) => {return a.number < 400;});
            newState = state.map((o) =>
                o.number < 400 ? { ...o, show: true } : { ...o, show: false }
            );
            break;

        case "filter_reset":
            newState = state.map((o) => ({ ...o, show: true }));
            break;

        case "defaultSortList":
            newState = [...state].sort((a, b) => a.row - b.row);
            break;

        case "add":
            newState = [...state, {
                number: randomNumber(0, 1000),
                color: randomColor(),
                show: true,
                row: state.length
            }];

            break;

        default:
            newState = [...state];
    }

    return newState;
}

export default listReducer;
