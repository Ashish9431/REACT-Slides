import Slide from "./Components/Slide";
import "./styles.css";
import { useState } from "react"


const data = [
  {
    id: 1,
    title: "Ashsih Kumar",
    description: "Web Devloper"
  },
  {
    id: 2,
    title: "Front End",
    description: "HTML CSS JAVASCRIPT"
  },
  {
    id: 3,
    title: "BACKEND",
    description: "React"
  }
];


export default function App() {  
  // const [num , setnum] = useState(data); 
  const [count , setCount] = useState(0)   

  const back=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  const next =()=>{
    if(count<2){
      // console.log(count); 
      setCount(count+1);  
    }  
    else{
      return count; 
    }
  }

  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide data={data[count]} />       
      <button data-testid="prev" onClick={back} >Prev</button>
      <button data-testid="next" onClick={next} >Next</button>
    </div>
  );
}