import SocialLink from "./socialLink"
import "./cart.css"
import Icon from "./assets/react.svg"
const carts={
     padding: "10px",
     fontSize: '40px'
}
function Cart(){
     return(
          <>
          <div id="cart" style={carts}>
               <img src={Icon} alt="" />
          <h1>this is Card</h1>
          <SocialLink/>
          </div>
          </>
     )
}
export default Cart