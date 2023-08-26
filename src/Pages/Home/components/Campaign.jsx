import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Image from '../../../assets/image/campaign.jpg'
import { useRef } from 'react'


const Campaign = () => {
    const carouselContainer = useRef()

    const slideBack = () =>{
        carouselContainer.current.scrollLeft -= 240;
    }
    const slideNext = () =>{
        carouselContainer.current.scrollLeft += 240;
    }


  return (
    <div className="my-44 flex flex-wrap justify-center select-none">
        <h6 className="text-4xl font-bold text-main-red mb-16">Campaign</h6>
        <div className="w-full flex items-center gap-2">
            <IoIosArrowBack onClick={slideBack} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>
            <div ref={carouselContainer} className='w-full gap-6 flex overflow-hidden scroll-smooth'>
                <img className='md:h-60 h-36' src={Image}/>
                <img className='md:h-60 h-36' src={Image}/>
                <img className='md:h-60 h-36' src={Image}/>
                <img className='md:h-60 h-36' src={Image}/>
                <img className='md:h-60 h-36' src={Image}/>
                <img className='md:h-60 h-36' src={Image}/>
            </div>
            <IoIosArrowForward onClick={slideNext} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>
        </div>    
    </div>
  )
}

export default Campaign