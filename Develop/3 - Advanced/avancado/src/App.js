import { useState } from 'react';
import './App.css';
import BVS from './assets/superVsBat.jpg';
import CarDetails from './components/CarDetails';
import ChildrenProp from './components/ChildrenProp';
import ConditionalRender from './components/ConditionalRender';
import ExecuteFunction from './components/ExecuteFunction';
import Fragmento from './components/Fragmento';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import MyMessage from './components/MyMessage';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  let anotherName = "Kobe Bryant";
  const[newName, setNewName] = useState("Stephen curry");

  const cars =[
    {id: 1, brand: "Ferrari", color: "Red", km: 0, newCar: true},
    {id: 2, brand: "Lamborghini", color: "Yellow", km: 1055, newCar: false},
    {id: 3, brand: "Mercedez-Benz", color: "Gray", km: 2014, newCar: false},
    {id: 4, brand: "BMW", color: "Black", km: 2014, newCar: false},
  ];

  const people = [
    {id: 1,name: "Samuel", age: 25, job: "Scrum Master"},
    {id: 2,name: "CR7", age: 38, job: "Jogador de futebol"},
    {id: 3,name: "Kobe Bryant", age: 45, job: "Atleta"},
    {id: 4,name: "Louis hamilton", age: 34, job: "Corredor"},
    {id: 5,name: "Thomas Shelby", age: 40, job: "Gangstá"},
    {id: 6,name: "Bolt ", age: 15, job: "Gangstá mirim"},
  ];

  function showMessage() {
    console.log("Evento de click");
  };

  const [message, setNewMessage] = useState("Empty");

  const handleMessage = (msg) =>
  {
    setNewMessage(msg);
  };

  return (
    <div className="App">
      <h3>Avançado no reactzada pai!</h3>

      {/* {people.map((person) => (
        <UserDetails 
          key={person.id}
          name={person.name}
          age={person.age}
          job={person.job}
        />
      ))} */}

      {/* State Lift */}
      {/* <MyMessage msg={message} />
      <ChangeMessageState myFunction={handleMessage}/> */}


      {/* Funções por props */}
      {/* <ExecuteFunction myFunction={showMessage} /> */}

      {/* <ChildrenProp myValue={19562.20}>
        <h2>JSX no componente pai, sendo renderizado no componente filho</h2>
        
        <h3>Quando eu era criança</h3>
      </ChildrenProp> */}


    {/* <Fragmento /> */}

      {/* props */}
      {/* <ShowUserName name={"Não é dinâmico, então é estático."}/>
      <ShowUserName name={anotherName}/>
      <ShowUserName name={newName}/> */}

      {/* desestructing & reutilização */}
      {/* <CarDetails brand="BMW" km={105} color="Ocean blue" newCar={false}/>
      <CarDetails brand="Masseratti" km={0} color="Red" newCar={true}/>
      <CarDetails brand="Audi TT" km={1005} color="White ice" newCar={false}/> */}

      {/* Utilizando: List Render, Recycling components and props */}
      {/* {cars.map((car) => (
        <CarDetails
          key={car.id} 
          id = {car.id}
          brand = {car.brand}
          color = {car.color}
          km = {car.km}
          newCar = {car.newCar}
        />
      ))} */}

      {/* Imagem no diretório public
      <div>
        <img src="/batman.jpg" alt="He's the fucking Batmá!" height={450} width={450} />
      </div>
      {/* Imagem no src */}
      {/* <div>
        <img src={BVS} alt="Batman versus Superman" height={450} width={450} />
      </div>

      <div>
        <ManageData/>
      </div>

      <div>
        <ListRender/>
      </div> */}

      {/* <ConditionalRender/> */}
    </div>
  );
}

export default App;
