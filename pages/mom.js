
import react from "react"
import './style.css'

import GiftComponent from '../components/GiftComponent'
import TicketComponent from '../components/TicketComponent'


///Icons
import { GiSawedOffShotgun, GiHomeGarage, GiBeachBucket } from 'react-icons/gi'
import { FaCarCrash } from 'react-icons/fa'
import {MdWeekend,MdPhotoCamera} from 'react-icons/md'
import {AiOutlineShopping,AiOutlineShop} from 'react-icons/ai'


  const FullHeightPage = () => (
    <div className="centered">
                    <link href="https://fonts.googleapis.com/css?family=Courier+Prime|Mountains+of+Christmas&display=swap" rel="stylesheet"></link>
                    <div style={{ textAlign: 'center', marginBottom: 5, marginTop: 30, fontSize: 40, fontWeight: 'bold', fontFamily: "'Mountains of Christmas', cursive" }} >
                           Merry Christmas, Mom!!
                    </div>
                    <div style={{flex: 1,margin: 'auto', maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                    <GiftComponent>
                    <TicketComponent title="Weekend Request"  icon={MdWeekend} type="Invite me to come down and spend a weekend with you being the primary source of my attention!" />
                    <TicketComponent title="Son and Mom Day" icon={AiOutlineShopping} type="Spend a whole day together doing everything from Brunch, to shopping and movies!" />
                    <TicketComponent title="Son and Mom Day" icon={AiOutlineShop} type="Spend a whole day together doing everything from Brunch, to shopping and movies!" />
                    <TicketComponent show={true} title="Picture Pass" icon={MdPhotoCamera} type="You know how I resist pictures?  NOT ANYMORE, for a full year starting January 1, 2019, I will participate in all of the annoying pictures" />        
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