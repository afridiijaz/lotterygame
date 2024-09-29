
import { useState } from 'react'
import './App.css'
import './input.css'
import { arrSum } from './helper.js'
import Lottery from './Lottery.jsx'
import Ticket from './Ticket.jsx'

function App() {
 
  let [ticketSize,setTicketSize ] = useState(0)
  let [conditionalSum , setConditionalSum] = useState(15)
  let winCondition = (tikt)=>{
    return arrSum(tikt) == conditionalSum;
  }
  
  return (
    <>
      <h1>Lottery game </h1>
      <form action="">
        <input className='input-control' type="number" placeholder='Enter ticket size default value 3' onChange={(event)=>{
         if(event.target.value!=0 && event.target.value>0){ setTicketSize(event.target.value)}
         else if(!event.target.value) {
          setTicketSize(3)
         }}}/>
         <input className='input-control' type="number" placeholder='Enter target addition number default value 15' onChange={(event)=>{
         if(event.target.value!=0 && event.target.value>0){ setConditionalSum(event.target.value)}
         else if(!event.target.value) {
          setConditionalSum(15)
         }}}/>
         <textarea  style = {{color:"lightgray", width:"330px", borderRadius:"5px",height:"60px" , paddingTop:"30px",textAlign:"center"}} name="" id=""> 3+4+8 = 15</textarea>
      </form>
     <Lottery n={ticketSize}  winCondition={winCondition}/>
   
   
    </>
  )
}

export default App
