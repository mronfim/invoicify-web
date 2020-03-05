import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import loggerMiddleware from "../middleware/logger"
import rootReducer from "./reducers"
import monitorReducersEnhancer from "./enhancers/monitorReducers"

export default function configStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [monitorReducersEnhancer]
    })

    if (process.env.NODE_ENV !== "production" && module.hot) {
        module.hot.accept("./reducers", () => store.replaceReducer(rootReducer))
    }

    return store
}