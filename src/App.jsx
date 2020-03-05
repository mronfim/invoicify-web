import React from "react"
import { connect } from "react-redux"
import { doNothing, toggleNightMode } from "./redux/actions"
import "./App.sass"

import TopNavbar from "./components/TopNavbar"

class App extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <TopNavbar />
                <h1>Hello, World!!</h1>
                <button onClick={() => this.props.toggleNightMode() }>Night Mode</button>
            </div>
        )
    }
}

export default connect(
    null,
    { doNothing, toggleNightMode },
)(App)
