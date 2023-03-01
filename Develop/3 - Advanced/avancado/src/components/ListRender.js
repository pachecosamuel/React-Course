import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Samuel", "Bia", "João de barro", "Array"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Samuel", age: 25},
        {id: 2, name: "Rihanna", age: 35},
        {id: 3, name: "Ronaldo", age: 38}
    ]);

    const exe = (x) => {
        if(x == true)
            return <h1>true</h1>
        else
            return <h1>false</h1>
    };

    const handleDeleteRandomUser = () => 
    {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name} - {item.age}</li>
                ))}
            </ul>

            <button onClick={handleDeleteRandomUser}>Click here to delete a random user</button>
            
        </div>
    );
};

export default ListRender;