import { useEffect, useState } from "react"


const Tabak = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://chilled-bills/product/tabak")
        .then( response => response.json())
        .then( data => setData(data))
    },[])

  return (
    <div className={`w-full relative h-auto ${data ? "grid" : "flex justify-center items-center"} 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8`}>

        {data ?
            data.map((product, key) => (
                <div key={key} className="w-48 h-60 flex flex-col items-center gap-3">
                    <div className="w-full h-48 bg-center bg-cover bg-no-repeat rounded-xl border border-gray-400"
                    style={{backgroundImage: `url(${product.image})`}}/>
                    <h3 className="px-5 text-center font-bold text-main-red">{product.name}</h3>
                </div>
            ))
            :
            <div className='w-[1400px] mt-52 mx-auto flex items-center justify-center'>
                <div
                className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                </div> 
            </div>  
        }
  
    </div>
  )
}

export default Tabak