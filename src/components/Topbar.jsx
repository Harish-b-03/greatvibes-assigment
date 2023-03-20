
const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] px-3 md:px-10 flex justify-between items-center border-b border-solid border-gray-100 bg-white z-50">
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