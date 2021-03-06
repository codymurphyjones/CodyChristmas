
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'

let GoTo = (val) => {
  return () => { window.location.href = './' + val };
}


///Icons
import { TiGift } from 'react-icons/ti'
import {IoMdGift} from 'react-icons/io'
import {GoGift} from 'react-icons/go'
import {FiGift} from 'react-icons/fi'
import {AiOutlineGift} from 'react-icons/ai'


const FullHeightPage = () => (
  <div className="centered" style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link>
    <div style={{ textAlign: 'center', marginBottom: 5, marginTop: 30, fontSize: 40, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
      Merry Christmas
                    </div>
                    <div style={{margin: 'auto', maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                    <a onClick={GoTo("jt")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Jt" icon={TiGift} type="Click me to see your gift!" /></a>
    <a onClick={GoTo("sam")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Samantha" icon={GoGift} type="Click me to see your gift!" /></a>
      <a onClick={GoTo("mom")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Mom" icon={FiGift} type="Click me to see your gift!" /></a>
        <a onClick={GoTo("dad")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Dad" icon={AiOutlineGift} type="Click me to see your gift!" /></a>
          <a onClick={GoTo("brittany")}><TicketComponent alignRight={true} hideIcon={true} title="Gift for Brittany" icon={IoMdGift} type="Click me to see your gift!" /></a>

          </div>
          <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
            height: 100%;
            width: 100%;
            padding: 0px;
            margin: 0px;
            
            background-color: #bb2528;
            color: #f8b229
        }
      `}</style>
        </div>
          )
          
  export default FullHeightPage