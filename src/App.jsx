import './index.css'
import {Provider} from "react-redux";
import {store} from "./app/Store.js";
import AppRoutes from "./router/AppRoutes.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";

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
