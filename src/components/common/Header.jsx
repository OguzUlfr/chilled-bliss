import { NavLink } from "react-router-dom"
import { TiThMenu } from 'react-icons/ti'
import { useEffect, useState } from "react"

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [data, setData] = useState();

  const changeVisible = () => {
    setShowNavbar(showNavbar => showNavbar ? false : true)
  }

  useEffect(()=>{
    fetch('https://chilled-bills/pages')
    .then(response => response.json())
    .then(page => setData(page));
  },[])


  return (
    <div className="w-full h-auto flex sm:flex-row flex-col sm:gap-16 gap-3 sm:items-center relative z-30 py-4">
        <div className="sm:p-0 p-3 flex items-center justify-between">
          <NavLink to="/" className="lg:text-4xl md:text-2xl text-4xl logo-Font text-main-red">Chilled Bliss</NavLink>
          <TiThMenu onClick={changeVisible} className="text-main-red cursor-pointer sm:hidden" size={28}/>
        </div>
        <div className={`gap-7 items-center font-bold text-gray-500 xl:text-base md:text-sm sm:flex sm:flex-row flex-col  ${showNavbar ? 'flex' : 'hidden'}`}>
          {data &&
            data.map( (pages, key)  => (
                <NavLink to={pages.route} key={key} className={"[&.active]:text-main-red w-20 text-center [&.active]:border-b-main-red transition-all border-b-transparent border-b-2 hover:border-b-main-red"}>{pages.name}</NavLink>
            ))
          }
        </div>
    </div>
  )
}

export default Header