
import react, {useState} from "react"
import EnabledIcon from './EnabledIcon'
import GiftIcon from './GiftIcon'
import TicketType from './TicketType'




  const TicketComponent = (props) => {
    const [show,setShow] = useState(false);
    let iconHide = (val) => {
        return val ? (<div></div>) : (<EnabledIcon show={props.show || false} />)
    }
    return (<div style={{width:"100%", height: 100, margin: 5, border:'1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: props.alignRight ? 'space-between':'center',
    textAlign: 'center',
    fontFamily: "'Courier Prime', monospace"}}>{iconHide(props.hideIcon)}<TicketType title={props.title}>{props.type || ""}</TicketType><GiftIcon alignRight={props.alignRight} icon={props.icon} /></div>);
  }
  
  export default TicketComponent
