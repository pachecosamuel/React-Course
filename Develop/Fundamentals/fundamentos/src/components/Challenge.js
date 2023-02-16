const Challenge = () => {

    const a = 2;
    const b = 3;

    const handleSum = (a, b) =>
    {
        return console.log("The sum is : " + (a+b));
    };

    return(
        <div>
            <h3>The first number is {a}</h3>
            <h3>The second number is {b}</h3>

            <button onClick={() => console.log(a+b)}>Click here to make the sum</button>
        </div>
    );
};

export default Challenge;