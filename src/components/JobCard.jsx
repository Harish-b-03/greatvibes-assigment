import { deleteJob } from "../api/deleteJob"

const JobCard = ({
    id,
    title,
    company,
    industry,
    location,
    remoteType,
    experience,
    salary,
    totalEmployees,
    applyType,
    setJobList,
    setLoading
}) => {

  const onDelete = async (id) => {
    setLoading(true);
    const response = await deleteJob(id);
    if(response.error === false){
      if(response.response.status === 200 && response.response.statusText === "OK"){
        alert("Job deleted");
        const deletedData = response.response.data;
        setJobList(prev => prev.filter(item => item.id !== deletedData.id))
      }
    }
    setLoading(false);
  }


  return (
    <div key={id} className="relative w-[830px] h-[320px] my-3 py-4 px-6 flex bg-white border border-solid border-[#DADEDF] box-border rounded-[10px]">
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
        <div className="absolute top-4 right-6 bg-white">
            <div className="w-14 flex justify-between items-center">
                <svg 
                    onClick={()=>{}}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                <svg 
                    onClick={()=>{onDelete(id)}}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default JobCard