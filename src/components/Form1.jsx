import { useState } from "react"
import InputField from "./InputField"

const Form1 = ({setStepNumber}) => {
  
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [industry, setIndustry] = useState("")
  const [location, setLocation] = useState("")
  const [remoteType, setRemoteType] = useState("")

  return (
    <div className="relative p-8 w-[577px] h-[564px] bg-[#FFFFFF] border border-solid border-card rounded-lg">
        <div className="w-full flex justify-between items-center">
            <div className="text-xl">
                Create a job
            </div>
            <div className="text-base text-[#182021] font-medium">
                Step 1
            </div>
        </div>
        <form>
            <InputField title={"Job title"} placeholder={"ex. UX UI Designer"} setChange={setTitle}/>
            <InputField title={"Company name"} placeholder={"ex. Google"} setChange={setCompany}/>
            <InputField title={"Industry"} placeholder={"ex. Information Technology"} setChange={setIndustry}/>

            <div className="w-full flex justify-between">
                <div className="w-[calc(50%-12px)]">
                    <InputField title={"Location"} placeholder={"ex. Chennai"} setChange={setLocation}/>
                </div>
                <div className="w-[calc(50%-12px)]">
                    <InputField title={"Remote Type"} placeholder={"ex. In-Office"} setChange={setRemoteType}/>
                </div>
            </div>
        </form>
        <div className="w-full absolute bottom-8 right-8">
            <button onClick={()=>{setStepNumber(prev=>prev + 1)}} className="px-4 py-2 float-right font-medium rounded-md bg-[#1597E4] text-white">Next</button>
        </div>
    </div>
  )
}

export default Form1