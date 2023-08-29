import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'


const Campaign = () => {
    const carouselContainer = useRef()
    const [data, setData] = useState();

    const slideBack = () =>{
        carouselContainer.current.scrollLeft -= 240;
    }
    const slideNext = () =>{
        carouselContainer.current.scrollLeft += 240;
    }

    useEffect(() => {
        fetch("https://chilled-bills/campaign")
        .then( response => response.json())
        .then( data => setData(data));
    },[]);


  return (
    <div className="my-44 flex flex-wrap justify-center select-none">
        <h6 className="text-4xl font-bold text-main-red mb-16">Campaign</h6>
        <div className="w-full flex items-center gap-2">
            <IoIosArrowBack onClick={slideBack} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>
            <div ref={carouselContainer} className='w-full gap-6 flex overflow-hidden scroll-smooth'>
                {data ?
                    data.map((campaign, key) => (
                        <img key={key} className='md:h-60 h-36' src={campaign.image}/>
                    ))
                    :
                    <div className='w-full flex items-center justify-center'>
                        <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        </div> 
                    </div>  
                }
            </div>
            <IoIosArrowForward onClick={slideNext} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>
        </div>    
    </div>
  )
}

export default Campaign