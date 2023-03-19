
const InputField = ({
        title, 
        placeholder,
        setChange, 
        type='string', 
        required=false
    }) => {
    return (
        <div className="mt-6 w-full">
            <div className="text-sm font-medium text-dark">
                {title}
            </div>
            <input 
                className="mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border border-solid rounded-md placeholder:text-[#7A7A7A]"
                placeholder={placeholder}
                required={required}
                type={type}
                onChange={setChange}
            />
        </div>
    )
}
export default InputField