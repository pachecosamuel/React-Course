const CarDetails = ({id, brand, km, color, newCar}) => {
  return (
    <div>
        <ul>
            <li>Id - {id}</li>
            <li>Brand - {brand}</li>
            <li>Miles - {km}</li>
            <li>Color - {color}</li>
            {newCar === true ?
            <li>It's a new car</li> : <></>}
        </ul>
        <br />
    </div>
  );}

export default CarDetails;

//{id, brand, km, color, newCar}