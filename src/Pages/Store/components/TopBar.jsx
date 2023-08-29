import { useState } from "react"

const TopBar = () => {
  const [dropdownVisible, setVisible] = useState();

  const changeVisible = () => {
    setVisible(dropdownVisible => dropdownVisible ? false : true )
  }

  return (
    <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <input className="bg-black bg-opacity-10 w-32 sm:w-60 p-2 px-3 rounded-lg outline-none text-gray-700 font-semibold"
          placeholder="Filter"/>
        </div>
        <div className="relative inline-block text-left">

          <div>
            <button type="button" onClick={changeVisible} className="inline-flex w-full justify-center gap-x-5 rounded-md bg-main-red px-4 py-2 text-sm font-semibold text-main-cream shadow-sm ring-1 ring-inset ring-main-red hover:bg-main-red" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Şehir
              <svg className="-mr-1 h-5 w-5 text-main-cream" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {dropdownVisible &&
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-main-cream shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1 h-36 overflow-y-scroll" role="none">
                    <span className="text-gray-700 block px-4 cursor-pointer py-2 text-sm hover:text-main-red" role="menuitem" tabIndex="-1" id="menu-item-0">Test</span>
              </div>
            </div>
          }
          
        </div>
      </div>
  )
}

export default TopBar