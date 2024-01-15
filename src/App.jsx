import './index.css'
import {Provider} from "react-redux";
import {store} from "./app/Store.js";
import AppRoutes from "./router/AppRoutes.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {
    return (
        <>
            <Provider store={store}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <ThemeProvider>
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </ThemeProvider>
                </LocalizationProvider>
            </Provider>
        </>
    )
}
export default App
