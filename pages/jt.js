
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'


///Icons
import { GiSawedOffShotgun, GiShotgun, GiFalling } from 'react-icons/gi'
import { FaCarCrash } from 'react-icons/fa'


  const FullHeightPage = () => (
    <div className="centered">
                    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link>
                    <div style={{ textAlign: 'center', marginBottom: 5, marginTop: 30, fontSize: 40, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
                           Merry Christmas, Jt!
                    </div>
                    <div style={{flex: 1,margin: 'auto', maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                    <GiftComponent>
                    <TicketComponent show={true} title="Gaming Time"  icon={GiSawedOffShotgun} type="Weekend Dedicated to Gaming, Just let me know the time to log on" />
                    <TicketComponent show={true} title="Gaming Time" icon={GiShotgun} type="Weekend Dedicated to Gaming, Just let me know the time to log on" />
                    <TicketComponent show={true} title="Gaming Time" icon={GiFalling} type="Weekend Dedicated to Gaming, Just let me know the time to log on" />
                    <TicketComponent show={true} title="Gaming Time" icon={FaCarCrash} type="Weekend Dedicated to Gaming, Just let me know the time to log on" />
        
                    </GiftComponent >
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