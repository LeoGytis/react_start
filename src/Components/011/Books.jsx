// import rand from '../../Functions/rand';
// https://in3.dev/knygos/

function Books({ books }) {

    if (books.length === 0) {
        return <div className="lds-dual-ring"></div>
    }
    return (
        <>
            {
                books.map(b => <div key={b.id}>{b.title}<img src={b.img} alt="book image"></img></div>)
            }
        </>
    );
}

export default Books;