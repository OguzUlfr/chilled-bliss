import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import IceCreamShop from '../../../assets/image/ice-cream-shop.png'
import {  useRef, useEffect } from 'react'

const Carousel = () => {
    const carouselBox  = useRef();
    const carouselElement = useRef()

    const slideBack = () => {
        if(carouselBox.current.scrollLeft == 0){
            carouselBox.current.scrollLeft = carouselBox.current.parentElement.offsetWidth * (carouselBox.current.querySelectorAll('div.carouselChild').length -1);
        }else{
            carouselBox.current.scrollLeft -= 1600;
        }
    }

    const slideNext = () => {
        if(carouselBox.current.scrollLeft == 0){
            carouselBox.current.scrollLeft =  (carouselBox.current.parentElement.offsetWidth * (carouselBox.current.querySelectorAll('div.carouselChild').length -1) - 50);
        }else{
            carouselBox.current.scrollLeft -= (carouselElement.current.offsetWidth + 64);
        }

    }

    {/*
        const autoSlide = () => {
                setInterval(() => {
                    if(carouselBox.current.scrollLeft >= (carouselBox.current.parentElement.offsetWidth * (carouselBox.current.querySelectorAll('div.carouselChild').length -1) - 50)){
                        carouselBox.current.scrollLeft = 0;
                    }else{
                        carouselBox.current.scrollLeft += (carouselElement.current.offsetWidth + 64);
                    }
                }, 5000);
            }

            useEffect(autoSlide,[])
    */}


  return (
    <div className="w-full">
        <div className="w-full flex gap-2 items-center">

            <IoIosArrowBack onClick={slideBack} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>

            <div ref={carouselBox} className='w-full flex gap-16 scroll-smooth  overflow-hidden'>

                <div ref={carouselElement} className='min-w-full flex md:flex-row flex-col-reverse carouselChild'>
                    <div className='md:w-6/12 w-full h-full flex flex-col lg:gap-20 md:gap-6 gap-3 p-3'>
                        <h2 className='2xl:text-6xl md:text-3xl text-3xl font-bold text-main-red xl:mt-48 lg:mt-28 md:leading-normal'>Lezzet Dolu Siparişler İçin Buradayız!</h2>
                        <p className='2xl:text-base xl:text-sm md:text-sm text-sm text-slate-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima adipisci explicabo. Nisi, ex facere. Nam, error. Eum beatae asperiores animi ducimus, deserunt similique officiis ea quia sit dicta dignissimos!
                        Unde obcaecati consequuntur laborum cum voluptas hic nesciunt alias, rerum atque optio sed modi maiores, eligendi officia. Officiis, tenetur harum. Harum, reprehenderit doloribus. Doloribus illo, nemo a nostrum exercitationem illum.</p>
                    </div>
                    <div className='2xl:w-8/12 md:w-6/12 w-full'>
                        <img src={IceCreamShop}/>
                    </div>
                </div>

            </div>


            <IoIosArrowForward onClick={slideNext} className='text-4xl p-1 text-main-red rounded-lg cursor-pointer hover:text-main-cream hover:bg-main-red'/>

        </div>
    </div>
  )
}

export default Carousel