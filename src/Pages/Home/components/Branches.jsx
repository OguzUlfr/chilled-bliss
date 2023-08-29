import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Branches = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://chilled-bills/branches")
        .then( response => response.json())
        .then( data => setData(data));
    },[])


  return (
    <div className="w-full sm:mt-44 mt-56 flex flex-wrap justify-center">
        <h6 className="text-main-red font-bold text-4xl mb-16">Branches</h6>
        <div className={`w-full ${ data ? "grid" : "flex justify-center items-center"} 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3`}>

            {data ?
                data.map((branch, key) => (
                    <Link key={key} className="w-full h-72 relative bg-black rounded-xl overflow-hidden flex justify-center items-end group">
                        <div className="w-full h-full bg-center bg-cover bg-no-repeat absolute opacity-50 group-hover:scale-105 transition-all"
                        style={{backgroundImage: "url('https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngt_we_bistanbul_gettyimages-668990458_hr.jpg?w=1600&h=900')"}}/>
                        <span className="text-3xl text-white font-bold relative z-10 mb-6 transition-all">{branch.name}</span>
                    </Link>
                ))
                :
                <div className='w-full h-80 flex items-center justify-center'>
                    <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    </div> 
                </div>  
            }
        
        </div>
    </div>
  )
}

export default Branches