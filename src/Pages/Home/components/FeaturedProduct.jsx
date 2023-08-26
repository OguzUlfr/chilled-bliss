import Image from '../../../assets/image/featured-1.png'

const FeaturedProduct = () => {
  return (
    <>
    <div className='absolute w-full mt-3 bg-main-red xl:h-[560px] md:h-[1000px] sm:h-[1300px] h-[1980px] left-0'/>
    <div className="mt-6 z-10 flex relative justify-center flex-wrap">

      <h6 className='md:text-4xl text-2xl py-14 font-bold text-main-cream'>Featured Product</h6>
      <div className="w-full grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 justify-center">
      
        <div className="w-64 h-[350px] p-3 flex flex-col items-center justify-between">
          <div className="w-full h-4/6 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${Image})`}}/>
          <h4 className='text-center font-bold text-main-cream'>Külahta çilekli çikolatalı vanilyalı dondurma</h4>
          <button className='bg-main-cream text-main-red font-bold px-5 py-2 rounded-lg hover:bg-opacity-60'>Daha Fazla</button>
        </div>
        <div className="w-64 h-[350px] p-3 flex flex-col items-center justify-between">
          <div className="w-full h-4/6 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${Image})`}}/>
          <h4 className='text-center font-bold text-main-cream'>Külahta çilekli çikolatalı vanilyalı dondurma</h4>
          <button className='bg-main-cream text-main-red font-bold px-5 py-2 rounded-lg hover:bg-opacity-60'>Daha Fazla</button>
        </div>
        <div className="w-64 h-[350px] p-3 flex flex-col items-center justify-between">
          <div className="w-full h-4/6 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${Image})`}}/>
          <h4 className='text-center font-bold text-main-cream'>Külahta çilekli çikolatalı vanilyalı dondurma</h4>
          <button className='bg-main-cream text-main-red font-bold px-5 py-2 rounded-lg hover:bg-opacity-60'>Daha Fazla</button>
        </div>
        <div className="w-64 h-[350px] p-3 flex flex-col items-center justify-between">
          <div className="w-full h-4/6 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${Image})`}}/>
          <h4 className='text-center font-bold text-main-cream'>Külahta çilekli çikolatalı vanilyalı dondurma</h4>
          <button className='bg-main-cream text-main-red font-bold px-5 py-2 rounded-lg hover:bg-opacity-60'>Daha Fazla</button>
        </div>
        <div className="w-64 h-[350px] p-3 flex flex-col items-center justify-between">
          <div className="w-full h-4/6 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${Image})`}}/>
          <h4 className='text-center font-bold text-main-cream'>Külahta çilekli çikolatalı vanilyalı dondurma</h4>
          <button className='bg-main-cream text-main-red font-bold px-5 py-2 rounded-lg hover:bg-opacity-60'>Daha Fazla</button>
        </div>

      </div>
    </div>
    </>
  )
}

export default FeaturedProduct