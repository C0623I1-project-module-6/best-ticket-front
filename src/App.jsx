import './index.css'

import {Provider} from "react-redux";
import {store} from "./redux/app/Store.js";
import AppRoutes from "./ultility/router/AppRoutes.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
         <Provider store={store}>
             <BrowserRouter>
                 <AppRoutes/>
             </BrowserRouter>
         </Provider>
        </>
    )
}

export default App
