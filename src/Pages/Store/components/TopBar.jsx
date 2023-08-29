import { MainContext, useContext } from "../context";


const TopBar = () => {
  const { storeData, setFilteredData } = useContext(MainContext)

  const storeFilter = (e) => {
    const filteredData = storeData.filter((store) => 
      store.city.includes(e.target.value) || store.name.includes(e.target.value)
    )
    setFilteredData(filteredData)
  }

  return (
    <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <input onChange={e => storeFilter(e)} className="bg-black bg-opacity-10 w-32 sm:w-60 p-2 px-3 rounded-lg outline-none text-gray-700 font-semibold"
          placeholder="Şehir veya şube ismi ara"/>
        </div>
      </div>
  )
}

export default TopBar