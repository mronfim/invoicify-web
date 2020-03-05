import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configStore from "./redux/configStore"
import App from "./App"

const store = configStore()

const renderApp = () =>
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    )

if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./App", renderApp)
}

renderApp()