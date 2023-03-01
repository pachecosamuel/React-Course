const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("The event has been activated");
    };

    const renderSomething = (x) => {
        if(x)
            return <h1>The x is true :D</h1>
        else
            return <h1>The x is false :/</h1>
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent} >Click here :D</button>
            </div>

            <div>
                <button onClick={() => console.log("oi ;)")} >Click here too</button>
            </div>

            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
}

export default Events; 