import { useState } from "react";
const ConditionalRender = () => {

    const[x] = useState(true);

    let[name, setName] = useState("Samuel");

    const handleAlterName = () => 
    {
      setName("Malandragem");
      console.log("You activated the use state and a handle function to log e modify the name");
    };

    const handleAlterNameToSamuel = () => 
    {
      setName("Samuel");
      console.log("You activated the use state and a handle function to log e modify the name");
    };

  return (
    <div>
        <h1>Is this gonna be showed?</h1>
        {x && <p>If x be true, yes!</p>}
        {!x && <p>If x be false, no!</p>}

        <br />

        <h1>Is this the right name?</h1>

        {name === "Samuel" ? 
        (<p>The name is Samuel</p>) : (<p>The name is another one</p>)}

        <button onClick={handleAlterName}>Change name to verify again</button>
        <br />
        <button onClick={handleAlterNameToSamuel} >Change name to verify again</button>
        {/* <button onClick={() => setName("Rico")} >Change name to verify again</button> */}

    </div>
  )};

export default ConditionalRender;