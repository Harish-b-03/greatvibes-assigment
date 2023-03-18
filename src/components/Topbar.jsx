
const Topbar = () => {
  return (
    <div className="w-full h-[60px] px-10 flex justify-between items-center border-b border-solid border-gray-100">
        <div className="flex">
            <img 
                src="/images/logo.jpeg" 
                alt="logo"
                className="w-9 mr-3 mix-blend-multiply" 
            />
            <span className="text-lg font-semibold text-black">
                Great Vibes
            </span>
        </div>
    </div>
  )
}

export default Topbar