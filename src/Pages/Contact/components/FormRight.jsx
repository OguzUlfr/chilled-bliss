const FormRight= () => {
  return (
    <form className="sm:w-1/2 w-full h-[620px] bg-main-red flex flex-col xl:p-14 lg:p-12 md:p-4 sm:p-2 p-3 py-10 items-center gap-7">
      <h4 className="text-3xl text-main-cream font-bold">Bilgiler</h4>   
      <label className="flex items-center gap-6 md:text-xl text-base font-bold">
        <span className="text-main-cream md:text-base border-r-2 border-r-main-cream px-4 xl:w-52 lg:w-40 sm:w-36 w-36 ">İsim Soyisim</span>
        <input className="w-3/6 p-1 shadow-xl bg-main-cream rounded-md outline-none px-2 text-main-red"/>
      </label>
      <label className="flex items-center gap-6 md:text-xl text-base font-bold">
        <span className="text-main-cream md:text-base border-r-2 border-r-main-cream px-4 xl:w-52 lg:w-40 sm:w-36 w-36 ">E-mail</span>
        <input className="w-3/6 p-1 shadow-xl bg-main-cream rounded-md outline-none px-2 text-main-red"/>
      </label>
      <label className="flex items-center gap-6 md:text-xl text-base font-bold">
        <span className="text-main-cream md:text-base border-r-2 border-r-main-cream px-4 xl:w-52 lg:w-40 sm:w-36 w-36 ">Başlık</span>
        <input className="w-3/6 p-1 shadow-xl bg-main-cream rounded-md outline-none px-2 text-main-red"/>
      </label>
      <label className="w-full flex flex-col px-8 gap-4 mt-4">
        <span className="w-full text-main-cream font-bold text-2xl">İçerik</span>
        <textarea className="w-full p-3 h-32 bg-main-cream rounded-xl outline-none text-main-red font-semibold"></textarea>
      </label>
      <button className="bg-main-cream text-main-red font-bold w-36 h-10 flex justify-center items-center rounded-lg hover:bg-opacity-70">Gönder</button>
    </form>
  )
}

export default FormRight