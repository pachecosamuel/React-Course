const ChangeMessageState = ({myFunction}) => {
    const messages = ["Good morning", "Boungiorno", "Bounjour"];
  
    return (
    <div style={{paddingTop: "10px"}}>
        <button onClick={() => myFunction(messages[0])}>One</button>
        <button onClick={() => myFunction(messages[1])}>Two</button>
        <button onClick={() => myFunction(messages[2])}>Three</button>
    </div>
  )};

export default ChangeMessageState;