import { MainContext, useContext } from "../context";


const TopBar = () => {
  const { storeData, setFilteredData } = useContext(MainContext)

  const storeFilter = (e) => {
    const filteredData = storeData.filter((store) => 
      store.city.toLocaleLowerCase("tr-TR").includes(e.target.value.toLocaleLowerCase("tr-TR")) || store.name.toLocaleLowerCase("tr-TR").includes(e.target.value.toLocaleLowerCase("tr-TR"))
    )
    setFilteredData(filteredData)
  }

  return (
    <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <input onChange={e => storeFilter(e)} className="bg-black bg-opacity-10 w-32 sm:w-60 p-2 px-3 rounded-lg outline-none text-gray-700 font-semibold"
          placeholder="Store and City Search"/>
        </div>
      </div>
  )
}

export default TopBar