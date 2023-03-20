import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <h2>There's nothing to see here!</h2>
        <Link to="/">Go back home</Link>
    </div>
  )
}

export default NotFound;