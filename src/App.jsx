import './index.css'

import {Provider} from "react-redux";
import {store} from "./redux/app/Store.js";
import AppRoutes from "./ultility/router/AppRoutes.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";
import {useEffect} from "react";

function App() {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <AppRoutes/>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default App
