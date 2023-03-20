import { useState } from "react";
import { editJob } from "../api/editJob";
import InputField from "./InputField";
import RangedInputField from "./RangedInputField";

const EditForm = ({
    editData,
    setEditData,
    setEditMode,
    setLoading,
    jobList,
    setJobList,
}) => {
  
    const edit = async () => {
        setLoading(true);
        const response = await editJob(editData);
        if(response.error === false){
            if(response.response.status === 200 && response.response.statusText === "OK"){
            alert("Job edited");
            const editedData = response.response.data;
            const otherData = jobList.filter(job => job.id !== editedData.id)
            setJobList([...otherData, editedData])
            }
        }
        setLoading(false);
        setEditMode(false);
    }  

  const [error, setError] = useState({ 
    title: {valid: null, message: null}, 
    company: {valid: null, message: null},
    industry: {valid: null, message: null},
  })

  const validate = () => {
    let valid = true;

    if(editData.title === ""){
        valid = false
        setError(prev=>({...prev, title:{valid: false, message: "Please enter title"}}))
    } else{
        valid = valid && true;
        setError(prev=>({...prev, title:{valid: true, message: ""}}))
    }
    
    if(editData.company === ""){
        valid = false
        setError(prev=>({...prev, company:{valid: false, message: "Please enter company"}}))
    } else{
        valid = valid && true;
        setError(prev=>({...prev, company:{valid: true, message: ""}}))
    }

    if(editData.industry === ""){
        valid = false
        setError(prev=>({...prev, industry:{valid: false, message: "Please enter industry"}}))
    } else{
        valid = valid && true;
        setError(prev=>({...prev, industry:{valid: true, message: ""}}))
    }

    if(valid){
        edit()
    }  
  }


  return (
    <div className="relative p-8 pr-4 w-[577px] h-[80%] md:h-[564px] bg-[#FFFFFF] border border-solid border-card rounded-lg">
        <div className="w-full flex justify-between items-center">
            <div className="text-xl">
                Edit job
            </div>
        </div>
        <form className="w-full h-[95%] overflow-y-scroll overflow-x-hidden">
            <div className="w-full pr-4">
                <InputField 
                    title={"Job title"} 
                    placeholder={"ex. UX UI Designer"} 
                    value={editData.title} 
                    setChange={(e)=>{setEditData(prev=>({...prev, title:e.target.value}))}} 
                    required={true} 
                    error={error.title}
                />
                <InputField 
                    title={"Company name"} 
                    placeholder={"ex. Google"} 
                    value={editData.company} 
                    setChange={(e)=>{setEditData(prev=>({...prev, company:e.target.value}))}} 
                    required={true} 
                    error={error.company}
                />
                <InputField 
                    title={"Industry"} 
                    placeholder={"ex. Information Technology"} 
                    value={editData.industry} 
                    setChange={(e)=>{setEditData(prev=>({...prev, industry:e.target.value}))}} 
                    required={true} 
                    error={error.industry}
                />

                <div className="w-full flex justify-between">
                    <div className="w-[calc(50%-12px)]">
                        <InputField 
                            title={"Location"} 
                            placeholder={"ex. Chennai"}  
                            value={editData.location} 
                            setChange={(e)=>{setEditData(prev=>({...prev, location:e.target.value}))}}
                        />
                    </div>
                    <div className="w-[calc(50%-12px)]">
                        <InputField 
                            title={"Remote Type"} 
                            placeholder={"ex. In-Office"}  
                            value={editData.remoteType} 
                            setChange={(e)=>{setEditData(prev=>({...prev, remoteType:e.target.value}))}}
                        />
                    </div>
                </div>
                <RangedInputField 
                    title={"Experience"} 
                    value={editData.experience}
                    placeholder={["Minimum","Maximum"]} 
                    setChangeMin={(e)=>{setEditData(prev=>({...prev, experience:{...prev.experience, min:parseInt(e.target.value)}}))}} 
                    setChangeMax={(e)=>{setEditData(prev=>({...prev, experience:{...prev.experience, max:parseInt(e.target.value)}}))}}
                />
                <RangedInputField
                    title={"Salary"} 
                    value={editData.salary}
                    placeholder={["Minimum","Maximum"]} 
                    setChangeMin={(e)=>{setEditData(prev=>({...prev, salary:{...prev.salary, min:parseInt(e.target.value)}}))}} 
                    setChangeMax={(e)=>{setEditData(prev=>({...prev, salary:{...prev.salary, max:parseInt(e.target.value)}}))}}
                />
                <InputField 
                    title={"Total employee"} 
                    value={editData.totalEmployees}
                    type={"number"} 
                    placeholder={"ex. 100"} 
                    setChange={(e)=>{setEditData(prev=>({...prev, totalEmployees:parseInt(e.target.value)}))}}
                />
                <div className="mt-6">
                    <div className="text-sm font-medium text-dark">
                        Apply type
                    </div>
                    <div className="mt-3 flex">
                        <label className={`${(editData.applyType === "Quick Apply")?'text-gray-800':'text-[#7A7A7A]'} text-sm  mr-4 w-fit flex justify-center items-center cursor-pointer`}>
                            <input 
                                type={"radio"}
                                value={`Quick Apply`}
                                checked={editData.applyType === "Quick Apply"}
                                onChange={(e)=>{setEditData(prev=>({...prev, applyType: e.target.value}))}}
                                className='mr-1 scale-110'
                            />
                            Quick Apply
                        </label>
                        <label className={`${(editData.applyType === "External Apply")?'text-gray-800':'text-[#7A7A7A]'} text-sm  mr-4 w-fit flex justify-center items-center cursor-pointer`}>
                            <input 
                                type={"radio"}
                                value={`External Apply`}
                                checked={editData.applyType === "External Apply"}
                                onChange={(e)=>{setEditData(prev=>({...prev, applyType: e.target.value}))}}
                                className='mr-1 scale-110'
                            />
                            External Apply
                        </label>
                    </div>
                </div>
                <div className="w-full mt-4 float-right">
                    <input
                        onClick={validate} 
                        type="button"
                        value={"Save changes"}
                        className="px-4 py-2 float-right font-medium rounded-md bg-[#1597E4] text-white hover:bg-blue-600 cursor-pointer"
                        />
                </div>
            </div>
        </form>
        <div onClick={()=>setEditMode(false)} className="absolute -top-1 md:top-0 right-0 w-10 h-10 translate-x-0 -translate-y-full md:translate-x-1/2 md:-translate-y-1/2 flex justify-center items-center text-white bg-[rgba(0,0,0,0.6)] rounded-full cursor-pointer">
            x
        </div>
    </div>
  )
}

export default EditForm