import {Route, Routes} from "react-router-dom";
import {ROUT_DATA} from "./RouterConstant.jsx"

function AppRoutes() {
    return (
        <Routes>
            {
                ROUT_DATA.map((route, index) => {
                    const Layout = route.layout
                    const Page = route.element
                    return route.layout ? (
                        <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
                    ) : route.children ? route.children.map((subRoute, index) => {
                        const Element = subRoute.element
                        return (<Route key={index} path={subRoute.path} element={<Page><Element/></Page>}/>)
                    }) : (
                        <Route key={index} path={route.path} element={<Page/>}/>

                    )
                })
            }
        </Routes>

    )
}

export default AppRoutes;

