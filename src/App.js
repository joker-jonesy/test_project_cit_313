import React from 'react';
import './App.css';
import Box from "./components/Box";

function App() {

    const [toggle, setToggle] = React.useState("Hiya");
    const [color, setColor]= React.useState("blue");

    return (
        <div className="App" style={{backgroundColor:color, color: "white"}}>
            <div className="cool">
                {toggle}
            </div>
            <button onClick={()=>setToggle("Hello there")}>Click Me</button>
            <button onClick={()=>setColor("red")}>Change Color</button>
            <Box name={"Fred"} />
            <Box name={"Bob"} />
            <Box name={"Alive"} />
            <Box name={"Ally"} />
        </div>
    );
}

export default App;
