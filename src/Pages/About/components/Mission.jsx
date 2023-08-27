
const Mission = () => {
  return (
    <div className="w-10/12 h-auto mx-auto mt-32 flex md:flex-row flex-col xl:gap-40 md:gap-24 gap-32 items-center">

        <div className="md:w-1/2 w-full flex flex-col gap-6">
            <h3 className="xl:text-5xl text-3xl font-bold text-main-red xl:mt-10 mt-6">Mission</h3>
            <p className="xl:text-2xl text-lg font-semibold text-slate-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="md:w-1/2 w-full h-full flex items-center">
            <div className="w-1/2 flex flex-col gap-4">
                <img className="w-1/2" src="https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298fb76b93c24_62f2074abd6c4cb348744fc1_Thumbnail-0010.png"/>
                <img className="w-1/2" src="https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298fb76b93c24_62f2074abd6c4cb348744fc1_Thumbnail-0010.png"/>
            </div>
            <img className="w-1/2" src="https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298fb76b93c24_62f2074abd6c4cb348744fc1_Thumbnail-0010.png"/>
        </div>
    </div>
  )
}

export default Mission