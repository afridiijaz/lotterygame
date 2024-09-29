
import "./Button.css"
export default function Button({action}) {
  return (
    <button  onClick={action} className="Button">Buy New Ticket</button>
  )
}
