import { useState } from "react"
import InputField from "./InputField"

const Form1 = ({
    setStepNumber, 
    data, 
    setData, 
    setShowFormContainer,
    width=577,
    height=564,
    backgroundColor='#FFFFFF',
    borderColor="#E6E6E6",
}) => {
  
  const [error, setError] = useState({ 
    title: {valid: null, message: null}, 
    company: {valid: null, message: null},
    industry: {valid: null, message: null},
  })

  const validate = () => {
    let valid = true;

    if(data.title === ""){
        valid = false
        setError(prev=>({...prev, title:{valid: false, message: "Please enter title"}}))
    } else{
        valid = valid && true;
        setError(prev=>({...prev, title:{valid: true, message: ""}}))
    }
    
    if(data.company === ""){
        valid = false
        setError(prev=>({...prev, company:{valid: false, message: "Please enter company"}}))
    } else{
        valid = valid && true;
        setError(prev=>({...prev, company:{valid: true, message: ""}}))
    }

    if(data.industry === ""){
        valid = false
        setError(prev=>({...prev, industry:{valid: false, message: "Please enter industry"}}))
    } else{
        valid = valid && true;
        setError(prev=>({...prev, industry:{valid: true, message: ""}}))
    }

    if(valid){
        console.log(error)
        setStepNumber(prev => prev + 1);
    }
    
  }

  return (
    <div className={`relative p-8 w-[${width}px] h-[${height}px] bg-[${backgroundColor}] border border-solid border-[${borderColor}] rounded-lg`}>
        <div className="w-full flex justify-between items-center">
            <div className="text-xl">
                Create a job
            </div>
            <div className="text-base text-[#182021] font-medium">
                Step 1
            </div>
        </div>
        <form>
            <InputField 
                title={"Job title"} 
                placeholder={"ex. UX UI Designer"} 
                value={data.title} 
                setChange={(e)=>{setData(prev=>({...prev, title:e.target.value}))}} 
                required={true} 
                error={error.title}
                titleWeight='bold'
            />
            <InputField 
                title={"Company name"} 
                placeholder={"ex. Google"} 
                value={data.company} 
                setChange={(e)=>{setData(prev=>({...prev, company:e.target.value}))}} 
                required={true} 
                error={error.company}
            />
            <InputField 
                title={"Industry"} 
                placeholder={"ex. Information Technology"} 
                value={data.industry} 
                setChange={(e)=>{setData(prev=>({...prev, industry:e.target.value}))}} 
                required={true} 
                error={error.industry}
            />

            <div className="w-full flex justify-between">
                <div className="w-[calc(50%-12px)]">
                    <InputField 
                        title={"Location"} 
                        placeholder={"ex. Chennai"}  
                        value={data.location} 
                        setChange={(e)=>{setData(prev=>({...prev, location:e.target.value}))}}
                    />
                </div>
                <div className="w-[calc(50%-12px)]">
                    <InputField 
                        title={"Remote Type"} 
                        placeholder={"ex. In-Office"}  
                        value={data.remoteType} 
                        setChange={(e)=>{setData(prev=>({...prev, remoteType:e.target.value}))}}
                    />
                </div>
            </div>
        </form>
        <div className="w-full absolute bottom-8 right-8">
            <input
                onClick={validate} 
                type="submit"
                value={"Next"}
                className="px-4 py-2 float-right font-medium rounded-md bg-[#1597E4] text-white hover:bg-blue-600 cursor-pointer"
            />
        </div>
        <div onClick={()=>setShowFormContainer(false)} className="absolute -top-1 md:top-0 right-0 w-10 h-10 translate-x-0 -translate-y-full md:translate-x-1/2 md:-translate-y-1/2 flex justify-center items-center text-white bg-[rgba(0,0,0,0.6)] rounded-full cursor-pointer">
            x
        </div>
    </div>
  )
}

export default Form1