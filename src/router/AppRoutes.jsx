import {Route, Routes} from "react-router-dom";
import {ROUT_DATA} from "./RouterConstant.jsx"
function AppRoutes(){
    return(
        <Routes>
            {
                ROUT_DATA.map((route, index) => {
                    const Layout = route.layout
                    const Page = route.element
                    return route.layout ? (
                        <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
                    ) : (
                        <Route key={index} path={route.path} element={<Page/>}/>
                    )
                })
            }
        </Routes>

    )
}
export default AppRoutes;
