import { useEffect, useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Topbar from "./components/Topbar";

function App() {
  const [stepNumber, setStepNumber] = useState(0)

  const [data, setData] = useState({
    title: "",
    company: "",
    industry: "",
    location: "",
    remoteType: "",
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  const [data2, setData2] = useState({
    experience: {min: 0, max: 0},
    salary: {min: 0, max: 0},
    totalEmployees: 0,
    applyType: "",
  })
  
  useEffect(() => {
    console.log(data2)
  }, [data2])


  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Topbar/>
      <main className="w-screen h-screen pt-[60px] md:px-20 bg-white">
        <div className="mt-5">
          <button onClick={()=>{setStepNumber(1)}} className="py-2 px-3 bg-primary text-white text-sm font-semibold flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-600">
            Create Job
          </button>
        </div>
      </main>
      { (stepNumber > 0) &&
        <div className="fixed top-[0px] w-screen h-[calc(100vh-0px)] flex justify-center items-center bg-[rgba(0,0,0,0.7)] overflow-y-auto">
          {
            (stepNumber === 1) &&
            <Form1 setStepNumber={setStepNumber} data={data} setData={setData}/>
          }
          {
            (stepNumber === 2) &&
            <Form2 data2={data2} setData2={setData2}/>
          }
        </div>
      }
    </div>
  );
}

export default App;
