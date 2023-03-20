import Topbar from "../components/Topbar";

const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <Topbar/>
        {children}
    </div>
  )
}

export default Layout