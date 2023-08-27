import { IoIosArrowDown } from 'react-icons/io'


const Main = () => {
  return (
    <div className="w-full h-[800px] flex items-center justify-center">
        <div className="lg:w-1/2 sm:4/6 w-5/6 flex flex-col gap-16 items-center">
          <h6 className='sm:text-7xl text-4xl font-bold text-main-red'>About Us</h6>
          <p className='sm:text-2xl text-base text-slate-500 font-bold text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <IoIosArrowDown size={60} className='text-main-red'/>
        </div>
      </div>
  )
}

export default Main