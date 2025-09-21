// import Cart from "./cart"
import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Loop from "./components/Loop"
// import Event from "./Event"
import PropsPage from "./components/PropsPage"
import UseState from "./components/UseState"

function App(){
  return (
   <>
   <Header/>
   {/* placeholder ar moto kaj kore  */}
   <Outlet/>
   {/* <UseState/> */}
   {/* <PropsPage/> */}
   {/* <Loop/> */}
   {/* <Cart/>
   <Event/> */}
   <Footer/>
   
   </>
  )
}
export default App