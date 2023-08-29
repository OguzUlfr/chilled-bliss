import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import AppStoreImage from '../../assets/image/app-store.png'
import GoogleStoreImage from '../../assets/image/play-store.png'
import HuaweiStoreImage from '../../assets/image/huawei-app.png'


const Footer = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('https://chilled-bills/pages')
        .then(response => response.json())
        .then(page => setData(page));
      },[])

  return (
    <div className="mt-36">
        <div className="w-full absolute bg-main-red h-auto left-0 p-5 py-12">
            <div className="md:w-10/12 w-full mx-auto md:flex-row flex-col flex md:justify-between md:gap-0 gap-10">
                <div className="md:w-3/12 w-full flex flex-col gap-6 text-main-cream">
                    <NavLink to="/" className="text-4xl logo-Font">Chilled Bliss</NavLink>
                    <div className="flex flex-col font-semibold">
                        <span>826 Stanton Hollow Road</span>
                        <span>Woburn</span>
                        <span>Massachusetts</span>
                        <span>01801</span>
                    </div>
                    <span className="font-semibold">Site Hakları 2020 &copy;</span>
                </div>
                <div className="md:w-5/12 w-full flex gap-0 pt-3 lg:text-base md:text-sm text-main-cream font-semibold">
                    <div className="w-1/2 flex flex-col gap-4">
                        {data &&
                            data.map((page, key) => (
                                <Link key={key} to={page.route}>{page.name}</Link>
                            ))
                        }
                    </div>
                    <div className="w-1/2 flex flex-col gap-4">
                        <Link>FAQ (Frequently Asked Questions)</Link>
                        <Link>Privacy Policy and Terms of Use</Link>
                        <Link>Partnerships or Collaborations</Link>
                        <Link>Return and Refund Policy</Link>
                        <Link>Accessibility Statement</Link>
                    </div>
                </div>
                <div className="md:w-3/12 w-full flex flex-col items-center pt-3 gap-3">
                    <span className="text-xl font-bold text-main-cream">Mobile App</span>
                    <div className="flex flex-col gap-2">
                        <a href='https://www.apple.com/tr/app-store/' target='blank'><img className="h-10" src={AppStoreImage}/></a>
                        <a href='https://play.google.com/store/games?hl=tr&gl=US' target='blank'><img className="h-10" src={GoogleStoreImage}/></a>
                        <a href='https://appgallery.huawei.com/Featured' target='blank'><img className="h-10" src={HuaweiStoreImage}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer