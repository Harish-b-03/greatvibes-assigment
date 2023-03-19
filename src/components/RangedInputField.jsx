import React from 'react'

const RangedInputField = ({
        title, 
        placeholder, 
        setChangeMin,
        setChangeMax,
        type="number",
    }) => {
    
    return (
        <div className="mt-6 w-full">
            <div className="text-sm font-medium text-dark">
                {title}
            </div>
            <div className="w-full flex justify-between">
                <div className="w-[calc(50%-12px)]">
                    <input 
                        type={type}
                        className="mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border rounded-md placeholder:text-[#7A7A7A]"
                        placeholder={placeholder[0]} 
                        onChange={setChangeMin}
                    />
                </div>
                <div className="w-[calc(50%-12px)]">
                    <input
                        type={type}
                        className="mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border rounded-md placeholder:text-[#7A7A7A]"
                        placeholder={placeholder[1]} 
                        onChange={setChangeMax}
                    />
                </div>
            </div>
        </div>
    )
}

export default RangedInputField