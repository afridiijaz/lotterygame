import TicketNum from "./TicketNum.jsx";
import "./Ticket.css"

export default function Ticket({ticket}){

   return (  <div className="Ticket" >
      <p>Ticket</p>
         {
           ticket.map((number,idx)=>{
                 
              return <TicketNum num={number}  key={idx}/>
            })
         }
        
       
    </div>
   )
}