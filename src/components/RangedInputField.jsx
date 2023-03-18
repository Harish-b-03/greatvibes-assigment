import React from 'react'

const RangedInputField = ({title, placeholder, setChange}) => {
    
    return (
        <div className="mt-6 w-full">
            <div className="text-sm font-medium text-dark">
                {title}
            </div>
            <div className="w-full flex justify-between">
                <div className="w-[calc(50%-12px)]">
                    <input 
                        type={"number"}
                        className="mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border rounded-md placeholder:text-[#7A7A7A]"
                        placeholder={placeholder[0]} 
                        onChange={(e)=>{setChange(prev=>({...prev, min:e.target.value}))}}
                    />
                </div>
                <div className="w-[calc(50%-12px)]">
                    <input 
                        className="mt-1 w-full h-9 px-3 py-2 font-normal text-sm outline-1 border rounded-md placeholder:text-[#7A7A7A]"
                        placeholder={placeholder[1]} 
                        onChange={(e)=>{setChange(prev=>({...prev, max:e.target.value}))}}
                    />
                </div>
            </div>
        </div>
    )
}

export default RangedInputField