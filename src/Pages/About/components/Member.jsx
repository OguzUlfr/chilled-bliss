
const Member = ({data}) => {
  return (
    <div className="sm:w-10/12 w-full h-auto mx-auto mt-80 flex flex-col items-center gap-24">
        <h6 className="text-5xl font-bold text-main-red">Team Member</h6>
        <div className="w-full grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

            {data &&
                data[0].teamMember.map((member, key) => (
                    <div key={key} className="w-full h-72 flex flex-col gap-5 items-center">
                    <div className="w-40 min-h-[160px] h-40 rounded-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url(${member.image}})`}}/>
                    <h6 className="text-2xl font-bold text-main-red">{member.name}</h6>
                    <span className="text-slate-700 w-36 text-center font-medium">{member.role}</span>
                </div>
                ))
            }

        </div>
    </div>
  )
}

export default Member