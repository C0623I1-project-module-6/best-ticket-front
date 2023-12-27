import './index.css'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./ultility/router/AppRoutes.jsx";
import {store} from "./redux/app/Store.js";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
