import { NavLink, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col sm:items-start items-center sm:gap-0 gap-5 mt-24">
        <div className="sm:w-72 w-full sm:items-start items-center  flex flex-col gap-2">
          <NavLink to="/product/kulah" className={"[&.active]:bg-opacity-100 bg-opacity-60 bg-main-red w-40 h-11 rounded-lg flex justify-center items-center text-xl text-main-cream font-bold transition-all hover:bg-main-red"}>Külah</NavLink>
          <NavLink to="/product/tabak" className={"[&.active]:bg-opacity-100 bg-opacity-60 bg-main-red w-40 h-11 rounded-lg flex justify-center items-center text-xl text-main-cream font-bold transition-all hover:bg-main-red"}>Tabak</NavLink>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Product