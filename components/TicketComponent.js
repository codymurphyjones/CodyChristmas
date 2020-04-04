
import react, {useState} from "react"
import EnabledIcon from './EnabledIcon'
import GiftIcon from './GiftIcon'
import TicketType from './TicketType'




  const TicketComponent = (props) => {
    var tardate = new Date("04/09/2020");
    var curDate = new Date();


    let iconHide = (val) => {
        return val ? (<div></div>) : (<EnabledIcon show={props.show || tardate.getTime() < curDate.getTime()} />)
    }
    return (<div style={{width:"100%", margin: 5, border:'1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: props.alignRight ? 'space-between':'center',
    textAlign: 'center',
    fontFamily: "'Courier Prime', monospace"}}>{iconHide(props.hideIcon)}<TicketType title={props.title}>{props.type || ""}</TicketType><GiftIcon alignRight={props.alignRight} icon={props.icon} /></div>);
  }
  
  export default TicketComponent
