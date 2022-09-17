function Kurmis() {
    const sliekai = 50;
    return (                // have to add () for multiple lines // <> used to make only one tag
        <>                 
        <h3>Kurmis</h3>  
        <span>Urvinis padaras valgantis { 2 + 3 } sliekus</span>
        <span>{ sliekai > 20 ? 'Daug' : 'Nedaug' } slieku</span>
        </> 
    );
}

export default Kurmis;