
import react, {useState} from "react"

import Legend from './Legend'

let url = "http://localhost:3000/gift.png"
//let url = "https://images.all-free-download.com/images/graphiclarge/beautiful_gift_of_picture_3_170125.jpg"

  const GiftComponent = (props) => {
    const [show,setShow] = useState(false);
    return show ? (<div style={{flex: 1, maxWidth: "300px", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
        {props.children}
        <br />
        <Legend />
        </div>) : (
    <img style={{maxWidth: "20%"}} onClick={() => { setShow(true)}} src={url}></img>

  )
  }
  
  export default GiftComponent