
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'


///Icons
import { GiSawedOffShotgun, GiHomeGarage, GiBeachBucket } from 'react-icons/gi'
import { FaCarCrash } from 'react-icons/fa'
import {MdCardTravel, MdDriveEta} from 'react-icons/md'


  const FullHeightPage = () => (
    <div className="centered">
                    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link>
                    <div style={{ textAlign: 'center', marginBottom: 5, marginTop: 30, fontSize: 40, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
                           Merry Christmas, Samantha!
                    </div>
                    <div style={{flex: 1,margin: 'auto', maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                    <GiftComponent>
                    <TicketComponent title="Week in Austin"  icon={MdCardTravel} type="Invited to spend a week with me in Austin, hanging out, exploring the city and having fun" />
                    <TicketComponent title="Week in Austin" icon={MdDriveEta} type="Invited to spend a week with me in Austin, hanging out, exploring the city and having fun" />
                    <TicketComponent title="Week in Austin" icon={GiHomeGarage} type="Invited to spend a week with me in Austin, hanging out, exploring the city and having fun" />
                    <TicketComponent title="Brother Sister Day" icon={GiBeachBucket} type="A day planned together where we try to have as much fun as possible together!" />
        
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