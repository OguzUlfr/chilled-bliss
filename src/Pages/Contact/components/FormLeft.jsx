import { PiInstagramLogoBold, PiTwitterLogoBold, PiFacebookLogoBold } from 'react-icons/pi'

const FormLeft = () => {
  return (
    <div className="sm:w-1/2 w-full h-[620px] p-14 flex flex-col md:gap-20 gap-14">
        <h6 className='text-4xl font-bold text-main-red'>Contact</h6>
        <p className='font-medium xl:text-base text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam autem iusto dignissimos commodi, nemo recusandae distinctio, iste nihil accusantium dolore, aut laboriosam repellat iure cupiditate. Reprehenderit aut commodi nostrum consectetur.
        Possimus culpa earum ullam labore omnis, nostrum vitae ipsam, beatae laborum illo hic dicta cum cumque? Nihil alias qui architecto omnis consectetur, perferendis numquam quis hic. Dolores officiis expedita cumque?</p>
        <div className="flex items-center gap-7 text-main-red">
            <a href='' target='blank' className='hover:scale-110'><PiInstagramLogoBold size={36}/></a>
            <a href='' target='blank' className='hover:scale-110'><PiTwitterLogoBold size={36}/></a>
            <a href='' target='blank' className='hover:scale-110'><PiFacebookLogoBold size={36}/></a>
        </div>
    </div>
  )
}

export default FormLeft