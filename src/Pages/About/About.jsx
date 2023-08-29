import Main from "./components/Main"
import Mission from "./components/Mission"
import Member from "./components/Member"
import Hiring from "./components/Hiring"
import { useEffect, useState } from "react"

const About = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://chilled-bills/about")
    .then( response => response.json())
    .then( data => setData(data));
  },[])

  return (
    <div className="w-full">
        <Main data={data}/>
        <Mission data={data}/>
        <Member data={data}/>
        <Hiring data={data}/>
    </div>
  )
}

export default About