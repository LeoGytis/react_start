import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef, useEffect } from "react";

function App() {
    const [count, setCount] = useState(null);

    const mano = useRef(0); // plain js kintamasis kuris neitakoja nieko kito
    const panda = useRef();

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count") ?? 0)); // parseInt nes gaunam stringa, ?? default
    }, []);

    useEffect(() => {
        if (null === count) {
            return;
        }
        localStorage.setItem("count", count);

        // console.log('Naujas countas: ', count);
    }, [count]);

    const add = () => {
        setCount((c) => c + 1);
        mano.current = mano.current + 3;
        console.log(mano.current);
        // const p = document.querySelector('#panda');

        const p = panda.current;
        // console.log(p.dataset.panda);
    };

    const addCat = () => {
        localStorage.setItem("katinukas", "Storas katinukas Murka");
        // localStorage.setItem('katinukas', JSON.stringify(['Murka', 'Pilkis']));
    };

    const getCat = () => {
        let kate = localStorage.getItem("katinukas");
        console.log(kate);
        // console.log(JSON.parse(localStorage.getItem('katinukas')));
    };

    const removeCat = () => {
        localStorage.removeItem("katinukas");
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>useRef and LocalStorage</h1>
                <h2>Counting {count}</h2>
                <button onClick={add}>Add +1</button>
                <button onClick={addCat}>Add cat</button>
                <button onClick={getCat}>Get cat</button>
                <button onClick={removeCat}>Remove cat</button>
                <div ref={panda} id="panda" data-panda="miega"></div>
            </header>
        </div>
    );
}

export default App;
