
const Hiring = ({data}) => {
  return (
    <div className="sm:w-10/12 w-full mx-auto mt-60 flex flex-col items-center gap-16">
        <h6 className="text-5xl font-bold text-main-red">Hiring</h6>
        <ul className="sm:w-4/6 w-5/6 mx-auto flex flex-col gap-8">
            {data &&
                data[0].hiring.map((hiring, key) => (
                    <li key={key} className="w-full border-b-2 border-b-main-red font-medium text-slate-700 p-2 flex items-center justify-between">
                    <h4>{hiring.role}</h4>
                    <span>{hiring.city}</span>
                </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Hiring