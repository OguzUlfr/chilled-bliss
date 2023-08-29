import { useEffect, useState } from "react"
import FormLeft from "./components/FormLeft"
import FormRight from "./components/FormRight"

const Contact = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://chilled-bills/contact")
    .then( response => response.json())
    .then( data => setData(data));
  },[])

  return (
    <div className="w-full mx-auto flex sm:flex-row flex-col sm:mt-24 mt-6 rounded-xl overflow-hidden shadow-xl">
      <FormLeft data={data}/>
      <FormRight/>
    </div>
  )
}

export default Contact