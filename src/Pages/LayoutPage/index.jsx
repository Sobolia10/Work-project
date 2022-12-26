import { Outlet } from "react-router-dom"
import HeaderComponent from "../../Components/HeaderComponent"

const LayoutPage = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}

export default LayoutPage;