import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full h-16 flex gap-16 items-center">
        <NavLink to="/" className="text-4xl logo-Font text-main-red">Chilled Bliss</NavLink>
        <div className="flex gap-7 items-cente font-bold text-gray-500">
            <NavLink to="/" className={"[&.active]:text-main-red w-20 text-center [&.active]:border-b-main-red transition-all border-b-transparent border-b-2 hover:border-b-main-red"}>Home</NavLink>
            <NavLink to="/product" className={"[&.active]:text-main-red w-20 text-center [&.active]:border-b-main-red transition-all border-b-transparent border-b-2 hover:border-b-main-red"}>Products</NavLink>
            <NavLink to="/store" className={"[&.active]:text-main-red w-20 text-center [&.active]:border-b-main-red transition-all border-b-transparent border-b-2 hover:border-b-main-red"}>Stores</NavLink>
            <NavLink to="/about" className={"[&.active]:text-main-red w-20 text-center [&.active]:border-b-main-red transition-all border-b-transparent border-b-2 hover:border-b-main-red"}>About</NavLink>
            <NavLink to="/contact" className={"[&.active]:text-main-red w-20 text-center [&.active]:border-b-main-red transition-all border-b-transparent border-b-2 hover:border-b-main-red"}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header