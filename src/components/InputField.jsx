
const InputField = ({
        title, 
        placeholder,
        value,
        setChange, 
        type="string", 
        required=false,
        error={},
    }) => {

    return (
        <div className="relative mt-6 w-full">
            <div className="text-sm font-medium text-[#212121]">
                {title} 
                {
                    required &&
                    <span className="font-normal text-red-500">*</span>
                }
            </div>
            <input 
                className={`mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border border-solid rounded-md placeholder:text-[#7A7A7A] ${(error.valid != null & !error.valid)? 'border-[#D86161]':''}`}
                value={value}
                placeholder={placeholder}
                required={required}
                type={type}
                onChange={setChange}
            />
            {
                (required && error.valid !== null && error.valid === false) &&
                    <div className="absolute h-fit z-50 -bottom-5 left-0 text-sm text-[#D86161] bg-white lowercase">
                        {error.message}
                    </div>
            }
        </div>
    )
}
export default InputField