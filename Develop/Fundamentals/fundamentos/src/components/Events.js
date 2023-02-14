const Events = () => {

    const handleMyEvent = (e) =>
    {
        console.log(e);
        console.log("The event has been activated");
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Click here :D</button>
            </div>

            <div>
                <button onClick={() => console.log("oi ;)")} >Click here too</button>
            </div>
        </div>
    );
}

export default Events; 