import InputField from "./InputField"
import RangedInputField from "./RangedInputField"

const Form2 = ({data2, setData2, submitForm}) => {
  
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
            <RangedInputField title={"Experience"} placeholder={["Minimum","Maximum"]} setChangeMin={(e)=>{setData2(prev=>({...prev, experience:{...prev.experience, min:parseInt(e.target.value)}}))}} setChangeMax={(e)=>{setData2(prev=>({...prev, experience:{...prev.experience, max:parseInt(e.target.value)}}))}}/>
            <RangedInputField title={"Salary"} placeholder={["Minimum","Maximum"]} setChangeMin={(e)=>{setData2(prev=>({...prev, salary:{...prev.salary, min:parseInt(e.target.value)}}))}} setChangeMax={(e)=>{setData2(prev=>({...prev, salary:{...prev.salary, max:parseInt(e.target.value)}}))}}/>
            <InputField title={"Total employee"} type={"number"} placeholder={"ex. 100"} setChange={(e)=>{setData2(prev=>({...prev, totalEmployees:parseInt(e.target.value)}))}}/>
            <div className="mt-6">
                <div className="text-sm font-medium text-dark">
                    Apply type
                </div>
                <div className="mt-3 flex">
                    <label className={`${(data2.applyType === "Quick Apply")?'text-gray-800':'text-[#7A7A7A]'} text-sm  mr-4 w-fit flex justify-center items-center cursor-pointer`}>
                        <input 
                            type={"radio"}
                            value={`Quick Apply`}
                            checked={data2.applyType === "Quick Apply"}
                            onChange={(e)=>{setData2(prev=>({...prev, applyType: e.target.value}))}}
                            className='mr-1 scale-110'
                        />
                        Quick Apply
                    </label>
                    <label className={`${(data2.applyType === "External Apply")?'text-gray-800':'text-[#7A7A7A]'} text-sm  mr-4 w-fit flex justify-center items-center cursor-pointer`}>
                        <input 
                            type={"radio"}
                            value={`External Apply`}
                            checked={data2.applyType === "External Apply"}
                            onChange={(e)=>{setData2(prev=>({...prev, applyType: e.target.value}))}}
                            className='mr-1 scale-110'
                        />
                        External Apply
                    </label>
                </div>
            </div>
        </form>
        <div className="w-full absolute bottom-8 right-8">
            <input 
                onClick={submitForm}
                type={'submit'}
                value="Save"
                className="px-4 py-2 float-right font-medium rounded-md bg-[#1597E4] text-white hover:bg-blue-600 cursor-pointer"/>
        </div>
    </div>
  )
}

export default Form2