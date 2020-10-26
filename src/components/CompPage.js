import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

function CompPage(){
    const [checked, setCheck]=React.useState(true);
    const [text, setText]=React.useState("");
    const handleCheck = (event)=>{
        setCheck(event.target.checked);
    };
    const handleText = (event)=>{
        setText(event.target.value);
    };
    return(
        <div>
            <Button variant={"contained"} color={"secondary"}>Some Button</Button>
            <Checkbox checked={checked} onChange={handleCheck}/>
            <TextField onChange={handleText} label={"Name"}/>
            {text}
        </div>
    );
}

export default CompPage;