import { PiInstagramLogoBold, PiTwitterLogoBold, PiFacebookLogoBold } from 'react-icons/pi'

const FormLeft = ({data}) => {
  return (
    <div className="sm:w-1/2 w-full h-[620px] p-14 flex flex-col md:gap-20 gap-14">
        <h6 className='text-4xl font-bold text-main-red'>Contact</h6>
        {data 
          ? <p className='font-medium xl:text-base text-sm text-slate-700'>{data.description}</p>
          : <div className='w-full flex items-center justify-center'>
              <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              </div> 
            </div>  
        }
        {data &&
          <div className="flex items-center gap-7 text-main-red">
            <a href={data.instagram} target='blank' className='hover:scale-110'><PiInstagramLogoBold size={36}/></a>
            <a href={data.twitter} target='blank' className='hover:scale-110'><PiTwitterLogoBold size={36}/></a>
            <a href={data.facebook} target='blank' className='hover:scale-110'><PiFacebookLogoBold size={36}/></a>
          </div>
        }
    </div>
  )
}

export default FormLeft