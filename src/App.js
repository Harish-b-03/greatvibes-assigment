import { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Topbar from "./components/Topbar";

function App() {
  const [stepNumber, setStepNumber] = useState(1)

  return (
    <div className="">
      <Topbar/>
      { (stepNumber > 0) &&
        <div className="fixed top-[0px] w-screen h-[calc(100vh-0px)] flex justify-center items-center bg-[rgba(0,0,0,0.05)]">
          {
            (stepNumber === 1) &&
            <Form1 setStepNumber={setStepNumber}/>
          }
          {
            (stepNumber === 2) &&
            <Form2 setStepNumber={setStepNumber}/>
          }
        </div>
      }
    </div>
  );
}

export default App;
