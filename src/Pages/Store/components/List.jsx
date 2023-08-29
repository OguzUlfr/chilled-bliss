import { IoLocationSharp } from 'react-icons/io5'
import { BiSolidCity } from 'react-icons/bi'
import { MainContext, useContext } from '../context'

const List = () => {
  const { filteredData } = useContext(MainContext);

  return (
    <div className={`w-full ${filteredData ? "grid" : "flex justify-center items-center"} 2xl:grid-cols-4  xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8`}>
      {filteredData ?
        filteredData.map((store, key) => (
            <div key={key} className="-full h-32 bg-black bg-opacity-20 rounded-lg overflow-hidden flex items-center">
                    <div className="w-4/12 h-full bg-red-300 bg-center bg-cover bg-no-repeat opacity-90"
                    style={{backgroundImage: "url('https://geoim.bloomberght.com/2023/03/14/ver1678806031/2326900_620x349.jpg')"}}/>
                    <div className="w-8/12 px-3 flex flex-col gap-4">
                        <h6 className='text-3xl font-bold text-slate-800'>{store.name}</h6>
                        <div className='flex items-center gap-3 text-slate-800'>
                            <span className="flex items-center gap-2"><BiSolidCity className='text-main-red'/>{store.city}</span>
                            <a href='https://www.google.com/maps/@40.9946242,29.1556924,18.04z?entry=ttu' target='blank' className="flex items-center gap-2 hover:underline"><IoLocationSharp className='text-main-red'/>Map</a>
                        </div>
                    </div>
                </div>
        ))
        :
          <div className='w-full h-80 flex items-center justify-center'>
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            </div> 
          </div> 
      }
                
    </div>
  )
}

export default List