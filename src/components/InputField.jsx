
const InputField = ({title, placeholder, setChange}) => {
    return (
        <div className="mt-6 w-full">
            <div className="text-sm font-medium text-dark">
                {title}
            </div>
            <input 
                className="mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border rounded-md placeholder:text-[#7A7A7A]"
                placeholder={placeholder} 
                onChange={(e)=>{setChange(e.target.value)}}
            />
        </div>
    )
}
export default InputField