import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dataPage/Luke"}>Luke</Link>
            <Link to={"/dataPage/Jerry"}>Jerry</Link>
            <Link to={"/comp"}>Components</Link>
            <Link to={"/firepage"}>Fire Page</Link>
        </nav>
    )
}

export default Nav;