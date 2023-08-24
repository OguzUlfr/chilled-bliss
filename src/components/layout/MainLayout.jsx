import { Outlet } from "react-router-dom"
import Header from "../common/Header"

const MainLayout = () => {
  return (
    <div className="w-full relative">
        <div className="w-10/12 mx-auto">
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout