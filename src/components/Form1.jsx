import InputField from "./InputField"

const Form1 = ({setStepNumber, data, setData}) => {
    
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
            <InputField title={"Job title"} placeholder={"ex. UX UI Designer"} name={"title"} setChange={(e)=>{setData(prev=>({...prev, title:e.target.value}))}} required={true}/>
            <InputField title={"Company name"} placeholder={"ex. Google"} name={"company"} setChange={(e)=>{setData(prev=>({...prev, company:e.target.value}))}} required={true}/>
            <InputField title={"Industry"} placeholder={"ex. Information Technology"} name={"industry"} setChange={(e)=>{setData(prev=>({...prev, industry:e.target.value}))}} required={true}/>

            <div className="w-full flex justify-between">
                <div className="w-[calc(50%-12px)]">
                    <InputField title={"Location"} placeholder={"ex. Chennai"}  name={"location"} setChange={(e)=>{setData(prev=>({...prev, location:e.target.value}))}}/>
                </div>
                <div className="w-[calc(50%-12px)]">
                    <InputField title={"Remote Type"} placeholder={"ex. In-Office"}  name={"remoteType"} setChange={(e)=>{setData(prev=>({...prev, remoteType:e.target.value}))}}/>
                </div>
            </div>
        </form>
        <div className="w-full absolute bottom-8 right-8">
            <input
                onClick={()=>{setStepNumber(prev=>prev + 1)}} 
                type="submit"
                value={"Next"}
                className="px-4 py-2 float-right font-medium rounded-md bg-[#1597E4] text-white hover:bg-blue-600 cursor-pointer"
            />
        </div>
    </div>
  )
}

export default Form1