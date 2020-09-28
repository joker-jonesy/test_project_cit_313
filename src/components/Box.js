import React from 'react';

function Box(props){

    const [name]=React.useState(props.name);
    const [number, setNumber]=React.useState(props.age);
    const [color,setColor]=React.useState("#00FF00");
    const [items]=React.useState(["Cool", "Stuff", "Things"])

    const addUp = ()=>{
        setNumber(number+10);
        if(number>=80){
            setColor("#E0FFFF")
        }
    };

    let style ={
        backgroundColor:color
    };

    const thingEles = items.map((it, idx)=>
        <h3 key={idx}>{it}</h3>
    );

    // let nameEle;
    //
    // if(props.name==="Fred"){
    //     nameEle=<h1>Fred is the coolest</h1>;
    // }else{
    //     nameEle=<h1>{props.name}</h1>;
    // }

    return(
        <div className={props.name==="Freddy"?"theOtherBox":"box"} style={style}>
            {props.name==="Fred"?<h1>Fred is the coolest</h1>:<h1>{name}</h1>}
            {/*{nameEle}*/}
            {number<100&&<button onClick={addUp}>Number is {number}</button>}
            {thingEles}
        </div>
    )
}

export default Box;