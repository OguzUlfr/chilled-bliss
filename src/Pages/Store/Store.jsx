import TopBar from "./components/TopBar"
import List from "./components/List"
import { MainContext } from "./context"
import { useEffect, useState } from "react"

const Store = () => {
  const [storeData, setStoreData ] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    fetch("https://chilled-bills/stores")
    .then( response => response.json())
    .then( stores => {
      setStoreData(stores)
      setFilteredData(stores)
    });
  },[]);

  const data = {
    storeData,
    setStoreData,
    filteredData,
    setFilteredData
  }

  return (
    <MainContext.Provider value={data}>
      <div className="w-full flex flex-col mt-16 gap-16">
          <TopBar/>
          <List/>
      </div>
    </MainContext.Provider>
  )
}

export default Store