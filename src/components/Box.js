import React from 'react';

function Box(props){

    const [name]=React.useState(props.name)
    const [number, setNumber]=React.useState(10);


    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>setNumber(number+10)}>Number is {number}</button>
        </div>
    )
}

export default Box;