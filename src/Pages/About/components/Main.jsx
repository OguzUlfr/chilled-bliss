import { IoIosArrowDown } from 'react-icons/io'


const Main = ({data}) => {
  return (
    <div className="w-full h-[800px] flex items-center justify-center">
      {data ?
        <div className="lg:w-1/2 sm:4/6 w-5/6 flex flex-col gap-16 items-center">

            <h6 className='sm:text-7xl text-4xl font-bold text-main-red'>About Us</h6>
            <p className='sm:text-2xl text-base text-slate-500 font-bold text-center'>{data[0].description}</p>
            <IoIosArrowDown size={60} className='text-main-red'/>
        </div>
        : <div className='w-full h-80 flex items-center justify-center'>
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            </div> 
          </div> 
      }
      </div>
  )
}

export default Main