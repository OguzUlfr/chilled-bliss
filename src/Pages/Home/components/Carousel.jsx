import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import IceCreamShop from '../../../assets/image/ice-cream-shop.png'
import {  useRef, useEffect, useState } from 'react'

const Carousel = () => {
    const carouselBox  = useRef();
    const carouselElement = useRef();
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('https://chilled-bills/carousel')
        .then(response => response.json())
        .then(data => setData(data));
      },[])


    const slideBack = () => {

            carouselBox.current.scrollLeft -= (carouselElement.current.offsetWidth + 64);

    }

    const slideNext = () => {
            carouselBox.current.scrollLeft += (carouselElement.current.offsetWidth + 64);

    }



  return (
    <div className="w-full">
        <div className="w-full flex gap-2 items-center">

            <IoIosArrowBack onClick={slideBack} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>

            <div ref={carouselBox} className='w-full h-auto flex gap-16 scroll-smooth overflow-hidden'>

                {data ?
                    data.map(( element, key ) => (
                        <div ref={carouselElement} key={key} className='min-w-full flex md:flex-row flex-col-reverse carouselChild'>
                            <div className='md:w-6/12 w-full h-full flex flex-col lg:gap-20 md:gap-6 gap-3 p-3'>
                                <h2 className='2xl:text-6xl md:text-3xl text-3xl font-bold text-main-red xl:mt-48 lg:mt-2   md:leading-normal'>{element.title}</h2>
                                <p className='2xl:text-base xl:text-sm md:text-sm text-sm text-slate-600 font-semibold'>{element.description}</p>
                            </div>
                            <div className='2xl:w-8/12 md:w-6/12 w-full'>
                                 <img src={IceCreamShop}/>
                                 <span>{element.image}</span>
                            </div>
                        </div>
                    ))        
                    :
                    <div className='w-full h-[500px] flex items-center justify-center'>
                        <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span
                        >
                        </div> 
                    </div>        
                }

            </div>


            <IoIosArrowForward onClick={slideNext} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>

        </div>
    </div>
  )
}

export default Carousel