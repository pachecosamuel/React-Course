import "./MyComponent.css";

const MyComponent = ({handleAlterName}) => {
  return (
    <>
      <h2 className="my-style-h2" >This is my first styling sheet on my react's course</h2>
      <h2 className="my-style-h2">Showing you how amazing i am working with react</h2>
      <button className="my-style-button" onClick={handleAlterName}>Click here to change the name</button>
    </>
  )};

export default MyComponent;