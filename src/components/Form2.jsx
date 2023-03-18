import { useEffect, useState } from "react"
import InputField from "./InputField"
import RangedInputField from "./RangedInputField"

const Form2 = () => {
    
  const [experience, setExperience] = useState({min:0, max : 0})
  const [salary, setSalary] = useState({min:0, max : 0})
  const [totalEmployees, setTotalEmployees] = useState(0)
  const [applyType, setApplyType] = useState("")
  
  useEffect(() => {
    console.log(experience, salary, applyType, totalEmployees)
  }, [experience, salary, applyType, totalEmployees])

  return (
    <div className="relative p-8 w-[577px] h-[564px] bg-[#FFFFFF] border border-solid border-card rounded-lg">
        <div className="w-full flex justify-between items-center">
            <div className="text-xl">
                Create a job
            </div>
            <div className="text-base text-[#182021] font-medium">
                Step 2
            </div>
        </div>
        <form>
            <RangedInputField title={"Experience"} placeholder={["Minimum","Maximum"]} setChange={setExperience}/>
            <RangedInputField title={"Salary"} placeholder={["Minimum","Maximum"]} setChange={setSalary}/>
            <InputField title={"Total employee"} placeholder={"ex. 100"} setChange={setTotalEmployees}/>
            <div className="mt-6">
                <div className="text-sm font-medium text-dark">
                    Apply type
                </div>
                <div className="mt-3 flex">
                    <label className="text-sm text-[#7A7A7A] mr-4 w-fit flex justify-center items-center">
                        <input 
                            type={"radio"}
                            value={`Quick Apply`}
                            checked={applyType === "Quick Apply"}
                            onChange={(e)=>{setApplyType(e.target.value)}}
                            className='mr-1 scale-110'
                        />
                        Quick Apply
                    </label>
                    <label className="text-sm text-[#7A7A7A] mr-4 w-fit flex justify-center items-center">
                        <input 
                            type={"radio"}
                            value={`External Apply`}
                            checked={applyType === "External Apply"}
                            onChange={(e)=>{setApplyType(e.target.value)}}
                            className='mr-1 scale-110'
                        />
                        External Apply
                    </label>
                </div>
            </div>
        </form>
        <div className="w-full absolute bottom-8 right-8">
            <button className="px-4 py-2 float-right font-medium rounded-md bg-[#1597E4] text-white">Save</button>
        </div>
    </div>
  )
}

export default Form2