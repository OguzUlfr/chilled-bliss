import FormLeft from "./components/FormLeft"
import FormRight from "./components/FormRight"

const Contact = () => {
  return (
    <div className="w-full mx-auto flex sm:flex-row flex-col sm:mt-24 mt-6 rounded-xl overflow-hidden shadow-xl">
      <FormLeft/>
      <FormRight/>
    </div>
  )
}

export default Contact