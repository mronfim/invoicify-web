import React from "react";
import { hot } from "react-hot-loader";
import "./App.sass";

import TopNavbar from "./components/TopNavbar";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopNavbar />
                <h1>Hello, World!!</h1>
            </div>
        );
    }
}

export default hot(module)(App);
