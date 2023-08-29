import Carousel from "./components/Carousel"
import FeaturedProduct from "./components/FeaturedProduct"
import Campaign from "./components/Campaign"
import MobileApp from "./components/MobileApp"
import Branches from "./components/Branches"

const Home = () => {

  return (
    <div>
      <Carousel/>
      <FeaturedProduct/>
      <Campaign/>
      <MobileApp/>
      <Branches/>
    </div>
  )
}

export default Home