const UserDetails = ({id, name, age, job}) => {
  return (
    <div>
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Job: {job}</li>

            {age >= 18 ? 
            <li>You can have you car license</li> 
            : 
            <li>You can't have your car license</li>}

        </ul>
    </div>
  )};

export default UserDetails;