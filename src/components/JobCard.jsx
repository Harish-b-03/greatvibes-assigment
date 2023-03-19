
const JobCard = ({
    title,
    company,
    industry,
    location,
    remoteType,
    experience,
    salary,
    totalEmployees,
    applyType,
}) => {
  return (
    <div className="w-[830px] h-[320px] my-3 py-4 px-6 flex bg-white border border-solid border-[#DADEDF] box-border rounded-[10px]">
        <div className="w-12 h-12 mr-2 overflow-hidden rounded-[5px]">
            <img
                src="/images/JobCardImage.png"
                alt="Company Logo"
                className="object-cover"
            />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start">
            <div className="mb-6">
                <div className="text-2xl text-black">
                    {title}
                </div>
                <div className="">
                    {`${company} - ${industry}`}
                </div>
                <div className="text-[#646464]">
                    {`${location} (${remoteType})`}
                </div>
            </div>
            <div className="text-base mb-6 text-[#212427]">
                <div className="mb-2">
                    {`Part-Time (9.00 am to 5.00 pm IST)`}
                </div>
                <div className="mb-2">
                    {`Experience (${experience.min} - ${experience.max} years)`}
                </div>
                <div className="mb-2">
                    INR (&#8377;) {salary.min} - {salary.max} / Month
                </div>
                <div className="">
                    {
                        (totalEmployees>200)?
                            '200+ employees':
                            (totalEmployees>50)?
                            '51-200 employees':
                            '<=50 employees'
                    }
                </div>
            </div>
            <div>
                {
                    (applyType === 'Quick Apply')?
                        <button className="py-2 px-4 bg-[#1597E4] text-white font-medium rounded-md cursor-pointer hover:bg-blue-600">
                            Apply Now
                        </button>
                        :
                        <button className="py-2 px-4 bg-white border border-solid border-[#1597E4] text-[#1597E4] font-medium cursor-pointer hover:border-blue-600 hover:text-blue-600 rounded-[5px]">
                            External Apply
                        </button>
                }
            </div>
        </div>
    </div>
  )
}

export default JobCard