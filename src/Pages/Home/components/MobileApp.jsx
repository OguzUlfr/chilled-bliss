import AppImage from '../../../assets/image/mobile-app.png'
import StoreImage from '../../../assets/image/store.png'

const MobileApp = () => {
  return (
    <div className="mt-36 w-full h-auto">
        <div className="w-full 2xl:h-[400px] xl:h-[440px] lg:h-[500px] md:h-[480px] sm:h-[620px] h-[800px] bg-main-red absolute left-0"></div>
        <div className="w-full h-max relative z-10 p-16 flex md:flex-row flex-col-reverse">
            <div className="md:w-1/2 w-full h-max flex flex-col sm:gap-8 gap-14">
                <h6 className="text-white 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">Dondurmanın Tatlı Dünyası Parmaklarınızın Ucunda!</h6>
                <p className="text-white sm:text-base text-sm font-semibold text-opacity-80">En lezzetli dondurmaları keşfetmek ve tatlı bir serinlik için mobil uygulamamızı indirin. Geniş dondurma seçeneklerimiz arasından favorinizi seçin, pratik ve hızlı sipariş verin. Dondurma tutkunlarının buluşma noktası olan mobil uygulamamızla tatlı bir keyif yaşamaya hazır olun!</p>
                <div className='flex sm:flex-row flex-col items-center gap-3'>
                    <img className='lg:h-10 sm:h-8 h-10' src={StoreImage}/>
                    <img className='lg:h-10 sm:h-8 h-10' src={StoreImage}/>
                    <img className='lg:h-10 sm:h-8 h-10' src={StoreImage}/>
                </div>
            </div>
            <div className="md:w-1/2 w-full relative justify-center sm:flex hidden">
                <img className='absolute lg:h-96 h-60 md:-top-12 sm:top-72' src={AppImage}/>
            </div>
        </div>
    </div>
  )
}

export default MobileApp