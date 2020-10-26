import React from 'react';
import Box from "./Box";

function DataPage(props){

    const [number,setNumber]=React.useState(0);
    const [color,setColor]=React.useState("purple");
    const [data,setData]=React.useState([{name:"Luke", age:26}, {name:"bob", age:50}]);
    const [submit, setSubmit]=React.useState(false);

    React.useEffect(()=>{
        if(number>5){
            setColor("red");
        }
    },[number]);

    React.useEffect(()=>{

        let ogData = data;
        ogData.push({name:"freddy", age:30});
        setData(ogData);

    }, [data,submit]);

    let boxEles = data.map((it,idx)=>
        <Box name={it.name} age={it.age}/>
    );

    return(
        <div>
            <h1>{props.match.params.id}</h1>
            <button onClick={()=>setNumber(number+1)}>Increase by 1</button>
            <button onClick={()=>setNumber(number+2)}>Increase by 2</button>
            <button onClick={()=>setSubmit(!submit)}>Add Item</button>
            <h3>{number}</h3>
            {boxEles}
            <div style={{backgroundColor:color, height:"100px", width:"100px"}}></div>
        </div>
    )
}

export default DataPage