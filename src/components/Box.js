import React from 'react';

function Box(props){

    const [name]=React.useState(props.name);
    const [number, setNumber]=React.useState(props.age);
    const [color,setColor]=React.useState("#00FF00");

    const addUp = ()=>{
        setNumber(number+10);
        if(number>=80){
            setColor("#E0FFFF")
        }
    };

    let style ={
        backgroundColor:color,
        height: number+"px"
    };

    return(
        <div className={"box"} style={style}>
            <h1>{name}</h1>
            <button onClick={addUp}>Number is {number}</button>
        </div>
    )
}

export default Box;