import AppImage from '../../../assets/image/mobile-app.png'
import AppStoreImage from '../../../assets/image/app-store.png'
import GoogleStoreImage from '../../../assets/image/play-store.png'
import HuaweiStoreImage from '../../../assets/image/huawei-app.png'

const MobileApp = () => {
  return (
    <div className="mt-36 w-full h-auto">
        <div className="w-full 2xl:h-[400px] xl:h-[440px] lg:h-[500px] md:h-[480px] sm:h-[620px] h-[800px] bg-main-red absolute left-0"></div>
        <div className="w-full h-max relative z-10 p-16 flex md:flex-row flex-col-reverse">
            <div className="md:w-1/2 w-full h-max flex flex-col sm:gap-8 gap-14">
                <h6 className="text-white 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">The Sweet World of Ice Cream at Your Fingertips!</h6>
                <p className="text-white sm:text-base text-sm font-semibold text-opacity-80">Download our mobile application to discover the most delicious ice creams and for a sweet coolness. Choose your favourite from our wide range of ice cream options, order practically and quickly. Get ready to experience a sweet pleasure with our mobile application, the meeting point for ice cream lovers!</p>
                <div className='flex sm:flex-row flex-col items-center gap-3'>
                    <a href='https://www.apple.com/tr/app-store/' target='blank'><img className='lg:h-10 sm:h-8 h-10' src={AppStoreImage}/></a>
                    <a href='https://play.google.com/store/games?hl=tr&gl=US' target='blank'><img className='lg:h-10 sm:h-8 h-10' src={GoogleStoreImage}/></a>
                    <a href='https://appgallery.huawei.com/Featured' target='blank'><img className='lg:h-10 sm:h-8 h-10' src={HuaweiStoreImage}/></a>
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