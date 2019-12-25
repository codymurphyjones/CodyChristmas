
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'


///Icons
import { GiSawedOffShotgun, GiHomeGarage, GiBeachBucket } from 'react-icons/gi'
import { FaGolfBall } from 'react-icons/fa'
import {MdGolfCourse } from 'react-icons/md'


  const FullHeightPage = () => (
    <div className="centered">
                    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link>
                    <div style={{ textAlign: 'center', marginBottom: 5, marginTop: 30, fontSize: 40, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
                          Merry Christmas, Dad!
                    </div>
                    <div style={{margin: 'auto', maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                    <GiftComponent>
                    <TicketComponent title="Front 9"  icon={FaGolfBall} type="Invitation to play any front 9 holes that you choose together" />
                    <TicketComponent title="Back 9" icon={MdGolfCourse} type="Invitation to play any back 9 holes that you choose together" />
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
            
            background-color: #bb2528;
            color: #f8b229
        }
      `}</style>
        </div>
  )
  
  export default FullHeightPage