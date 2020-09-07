import React from 'react';
import './style/App.css';
import Box from "./components/Box";
import style from "./style/style";

function App() {

    const [toggle, setToggle] = React.useState("Hiya");
    const [color, setColor]= React.useState("blue");

    return (
        <div className="App" style={{backgroundColor:color, color: "white"}}>
            <div className="cool">
                {toggle}
            </div>
            <div style={style.exampleBox}></div>
            <button onClick={()=>setToggle("Hello there")}>Click Me</button>
            <button onClick={()=>setColor("red")}>Change Color</button>
            <Box name={"Fred"} age={69}/>
            <Box name={"Bob"} age={70}/>
            <Box name={"Alive"} age={65}/>
            <Box name={"Ally"} age={20}/>
        </div>
    );
}

export default App;
