import { useState } from "react"
import "./Lottery.css"
import "./Button.css"
import {genTicket} from "./helper";
import Button from "./Button.jsx"
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}){
    let  [ticket, setTicket ] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }

// lifting state up
    return (
        <div>

            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <h3 style={{color: "darkgreen"}}>{isWinning && "Congratulations , You won!"}</h3>
        </div>
    );
}
 