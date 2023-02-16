import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Samuel", "Bia", "João de barro", "Array"]);
    const [users] = useState([
        {id: 1, name: "Samuel", age: 25},
        {id: "2a3b4c", name: "Rihanna", age: 35},
        {id: "9b8c7d", name: "Ronaldo", age: 38}
    ]);

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
        </div>
    );
};

export default ListRender;