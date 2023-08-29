import { useEffect, useState } from 'react'


const FeaturedProduct = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://chilled-bills/featured-product")
    .then( response => response.json())
    .then( data => setData(data));
  },[])

  return (
    <>
    <div className='absolute w-full mt-3 bg-main-red xl:h-[560px] md:h-[1000px] sm:h-[1300px] h-[1980px] left-0'/>
    <div className="mt-6 z-10 flex relative justify-center flex-wrap">

      <h6 className='md:text-4xl text-2xl py-14 font-bold text-main-cream'>Featured Product</h6>
      <div className={`w-full ${data ? "grid" : "flex"} xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 justify-center`}>
      {data ?
          data.map((product, key) => (
          <div key={key} className="w-64 h-[350px] p-3 flex flex-col items-center justify-between">
            <div className="w-full h-4/6 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${product.image})`}}/>
            <h4 className='text-center font-bold text-main-cream'>{product.title}</h4>
            <button className='bg-main-cream text-main-red font-bold px-5 py-2 rounded-lg hover:bg-opacity-60'>Daha Fazla</button>
          </div>
          ))
          :
          <div className='w-full h-80 flex items-center justify-center'>
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-cream motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            </div> 
          </div>   
      }

      </div>
    </div>
    </>
  )
}

export default FeaturedProduct