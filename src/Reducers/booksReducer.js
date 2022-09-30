import axios from "axios";

function booksReducer(state, action) {
    let newState;
    // newState = state;

    switch (action.type) {
        case "new_list":
            newState = action.payload.map((b, i) => ({
                ...b,
                show: true,
                row: i,
                typename: "nera",
            }));
            break;

        case "sort_list":
            // newState = [...state].sort((a, b) => {   // NOT WORKING
            //     return a.title - b.title;
            // });
            newState = [...state].sort((a, b) => {
                if (a.title > b.title) return 1;
                if (b.title > a.title) return -1;
                return 0;
            });
            break;

        case "defaultSortList":
            newState = [...state].sort((a, b) => {
                return a.row - b.row;
            });
            break;

        case "more13":
            newState = state.map((o) =>
                o.price > 13 ? { ...o, show: true } : { ...o, show: false }
            );

            break;

        case "freset":
            newState = state.map((o) => ({ ...o, show: true }));
            break;

        case "book_rel":
            axios.get("https://in3.dev/knygos/").then((res) => {
                
            
            const newData = res.data;
                newState = newData.map((b, i) => ({
                    ...b,
                    show: true,
                    row: i,
                }));


                // console.log(newData);
                // console.log('veikia-------');
                // console.log(res.data);
            // setTimeout(() => {  console.log(res.data); }, 5000);

            });
            console.log('veikia cia');
            break;


        // case "get_types":
        //     console.log("Payload");
        //     console.log(action.payload);
        //     // newState = state.map((o) => ({ ...o, show: true }));
        //     newState = state.map((o) =>
        //         o.type === action.payload.id
        //             ? { ...o, typename: action.payload.title }
        //             : { ...o, typename: "jau_yra" }
        //     );
        //     break;

        // case "get_types":
        //     newState = action.payload.map((b, i) => ({
        //         ...b,
        //         show: true,
        //         row: i,
        //         typename: "nera",
        //     }));
        //     break;

        default:
            newState = [...state];
    }

    return newState;
}

export default booksReducer;
