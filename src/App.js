import React from 'react';
import './style/App.css';
import Home from "./components/Home";
import About from "./components/About";
import DataPage from "./components/DataPage";
import Nav from "./components/Nav";
import CompPage from "./components/CompPage";
import FirePage from "./components/FirePage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/firepage"} component={FirePage}/>
                    <Route path={"/comp"} component={CompPage}/>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
