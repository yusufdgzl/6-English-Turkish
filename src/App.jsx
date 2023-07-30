import "./style.css"
import { english } from "./english"
import { answer } from "./answer"
import {  useState } from "react"
function App() {

  const [answers, setAnswers] = useState(answer)
  const [answersId,setAnswersId] = useState(null)





function handleClick(id){
setAnswersId(id)

}



  return (
    <>
      <div className="container">

        <div className="englishWord">
          {
            english.map((item, index) => <p key={index}>{item}<button onClick={()=>handleClick(index)} className="button">show</button><p ></p> </p>)
          }
        </div>
        <div className="answers">
          {
           answers[answersId]
          }
        </div>
      </div>
    </>
  )
}

export default App
