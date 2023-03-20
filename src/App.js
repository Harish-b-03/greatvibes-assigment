import { useEffect, useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Topbar from "./components/Topbar";
import axios from 'axios';
import {BASE_URL} from "./constants/constants"
import JobCard from "./components/JobCard";
import { postjob } from "./api/postJob";

function App() {
  const [stepNumber, setStepNumber] = useState(1)
  const [formData, setFormData] = useState({})
  const [jobList, setJobList] = useState([])
  const [loading, setLoading] = useState(false)
  const [showFormContainer, setShowFormContainer] = useState(false)

  const [data, setData] = useState({
    title: "",
    company: "",
    industry: "",
    location: "",
    remoteType: "",
  })

  const [data2, setData2] = useState({
    experience: {min: 0, max: 0},
    salary: {min: 0, max: 0},
    totalEmployees: 0,
    applyType: "",
  })
  
  useEffect(() => {
    
    setLoading(true)

    axios.get(`${BASE_URL}/jobs`).then((res) => {
      setJobList(res.data)
      setLoading(false)
    })

  }, [])
  

  useEffect(() => {
    setFormData({...data, ...data2})
    // console.log(userData)
  }, [data, data2])

  const submitForm = async () => {
    
    setLoading(true);
    const response = await postjob(formData);
    if(response.error === false){
      if(response.response.status === 201 && response.response.statusText === "Created"){
        alert("Job created");
        const addedData = response.response.data;
        setJobList(prev => [...prev, addedData])
      }
    }
    setLoading(false);
    setStepNumber(1);
    setShowFormContainer(false);
  }  

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Topbar/>
      <main className="w-screen h-fit min-h-screen pt-[60px] md:px-20 bg-gray-100">
        <div className="mt-5 px-3 md:px-0">
          <button onClick={()=>{setStepNumber(1); setShowFormContainer(true)}} className="py-2 px-3 bg-primary text-white text-sm font-semibold flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-600">
            Create Job
          </button>
        </div>
        <div className="w-full h-fit bg-gray-100 flex flex-wrap justify-center items-center">
          {
            jobList.map((job, index)=>{
              return(
                <JobCard key={index} {...job} setJobList={setJobList} setLoading={setLoading} setShowFormContainer={setShowFormContainer} jobList={jobList}/>
              )
            })
          }
        </div>
      </main>
      { (showFormContainer && stepNumber > 0) &&
        <div className="fixed top-[0px] left-0 w-screen h-[calc(100vh-0px)] flex justify-center items-center bg-[rgba(0,0,0,0.7)] overflow-y-auto z-50">
          {
            (stepNumber === 1) &&
              <Form1 setStepNumber={setStepNumber} data={formData} setData={setData} setShowFormContainer={setShowFormContainer}/>
          }
          {
            (stepNumber === 2) &&
              <Form2 data2={formData} setData2={setData2} submitForm={submitForm}  setShowFormContainer={setShowFormContainer}/>
          }
        </div>
      }
      {
        loading && 
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.7)] z-50">
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <span className="ml-3 text-lg text-white font-semibold">
            Loading...
          </span>
        </div>
      }
    </div>
  );
}

export default App;
