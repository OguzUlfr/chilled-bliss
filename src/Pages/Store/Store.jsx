import TopBar from "./components/TopBar"
import List from "./components/List"

const Store = () => {

  return (
    <div className="w-full flex flex-col mt-16 gap-16">
        <TopBar/>
        <List/>
    </div>
  )
}

export default Store