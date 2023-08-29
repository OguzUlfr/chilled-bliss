import { useState } from "react"
import { FaCheck } from 'react-icons/fa'

const FormRight= () => {
  const [formData, setFormData] = useState({name: "", mail: "", title: "", content: ""});
  const [status, setStatus] = useState("sleep");

  const formInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData( values => ({ ...values, [name]: value}))
  }

  const formSubmit = (e) => {
    setStatus("waiting")
    fetch("https://chilled-bills/contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then( response => response.json())
    .then( data => {
      setStatus("success")
      setTimeout(() => {
        setStatus("sleep")
      },[1000])
    });

    setFormData({name: "", mail: "", title: "", content: ""});

   
    e.preventDefault();

  }

  return (
    <form onSubmit={e => formSubmit(e)} className="sm:w-1/2 w-full h-[620px] bg-main-red flex flex-col xl:p-14 lg:p-12 md:p-4 sm:p-2 p-3 py-10 items-center gap-7">
      <h4 className="text-3xl text-main-cream font-bold">Information</h4>   
      <label className="flex items-center gap-6 md:text-xl text-base font-bold">
        <span className="text-main-cream md:text-base border-r-2 border-r-main-cream px-4 xl:w-52 lg:w-40 sm:w-36 w-36 ">Name Surname</span>
        <input onChange={e => formInputData(e)} value={formData.name || ''} name="name" className="w-3/6 p-1 shadow-xl bg-main-cream rounded-md outline-none px-2 text-main-red"/>
      </label>
      <label className="flex items-center gap-6 md:text-xl text-base font-bold">
        <span className="text-main-cream md:text-base border-r-2 border-r-main-cream px-4 xl:w-52 lg:w-40 sm:w-36 w-36 ">E-mail</span>
        <input onChange={e => formInputData(e)} value={formData.mail || ''} name="mail" className="w-3/6 p-1 shadow-xl bg-main-cream rounded-md outline-none px-2 text-main-red"/>
      </label>
      <label className="flex items-center gap-6 md:text-xl text-base font-bold">
        <span className="text-main-cream md:text-base border-r-2 border-r-main-cream px-4 xl:w-52 lg:w-40 sm:w-36 w-36 ">Title</span>
        <input onChange={e => formInputData(e)} value={formData.title || ''} name="title" className="w-3/6 p-1 shadow-xl bg-main-cream rounded-md outline-none px-2 text-main-red"/>
      </label>
      <label className="w-full flex flex-col px-8 gap-4 mt-4">
        <span className="w-full text-main-cream font-bold text-2xl">Content</span>
        <textarea onChange={e => formInputData(e)} value={formData.content || ''} name="content" className="w-full p-3 h-32 bg-main-cream rounded-xl outline-none text-main-red font-semibold"></textarea>
      </label>
      <button className="bg-main-cream text-main-red font-bold w-36 h-10 flex justify-center items-center rounded-lg hover:bg-opacity-70">
        {status === "success" && <FaCheck className="text-main-red"/> }
        {status === "sleep" && "Submit"}
        {status === "waiting" && 
          <div className='w-full flex items-center justify-center'>
            <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-125em] text-main-red motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            </div> 
          </div>  
        }
      </button>
    </form>
  )
}

export default FormRight