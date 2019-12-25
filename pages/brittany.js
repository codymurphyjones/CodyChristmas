
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'


///Icons
import { GiLinkedRings, GiCardJoker } from 'react-icons/gi'


  const FullHeightPage = () => (
    <div className="centered">
                    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link> 
                    <div style={{ textAlign: 'center', marginBottom: 5, marginTop: 30, fontSize: 40, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
                    Merry Christmas, Brittany!
                    </div>
                    <div style={{flex: 1,margin: auto, maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}></div>
                    <GiftComponent>
                    <TicketComponent title="Get Shit Done Guy"  icon={GiLinkedRings} type="Stressful problems that need immediate solutions during the wedding?  Send them my way, this ticket is redeemable repeatedly during wedding festivities" />
                    <TicketComponent title="Practical (Joke) Partner" icon={GiCardJoker} type="I will assist you with any and all practical jokes against Jt Jones, this ticket does not expire" />
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