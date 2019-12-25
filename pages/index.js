
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'

let GoTo = (val) => {
  return () => { window.location.href = './' + val };
}


///Icons
import { GiLinkedRings } from 'react-icons/gi'
import { FaGift } from 'react-icons/fa'


const FullHeightPage = () => (
  <div className="centered">
    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link>
    <div style={{ textAlign: 'center', marginBottom: 15, fontSize: 50, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
      Merry Christmas
                    </div>
    <a onClick={GoTo("jt")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Jt" icon={FaGift} type="Click me to see your gift!" /></a>
    <a onClick={GoTo("sam")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Samantha" icon={FaGift} type="Click me to see your gift!" /></a>
      <a onClick={GoTo("mom")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Mom" icon={FaGift} type="Click me to see your gift!" /></a>
        <a onClick={GoTo("dad")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Dad" icon={FaGift} type="Click me to see your gift!" /></a>
          <a onClick={GoTo("brittany")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Brittany" icon={FaGift} type="Click me to see your gift!" /></a>


            <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
            height: 100%;
            width: 100%;
            padding: 0px;
            margin: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-color: #bb2528;
            color: #f8b229
        }
      `}</style>
        </div>
          )
          
  export default FullHeightPage