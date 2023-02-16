import React, { useState } from 'react';

const ManageData = () => {

    let someData = 7;
    console.log(someData);

    const [number, setNumber] = useState(20);
    console.log(number);

    return (
        <div>
            <div>
                <p>Number = {7}</p>
                <button onClick={() => (someData = 15)} >Change value</button>
            </div>

            <div>
                <p>Number = {number}</p>
                <button onClick={() => setNumber(25)} >Change value too</button>
            </div>
        </div>

    );
};

export default ManageData;