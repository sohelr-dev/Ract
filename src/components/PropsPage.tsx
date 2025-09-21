import "./cart/cart.css";
import PropsChild from "./PropsChild";
import Data from "../data.json";
import Header from "./header";
import Footer from "./footer";


function PropsPage(){
     const user1= { name:"Rahat",email:"rahat@gmail.com",round:65};
     const user2= { name:"Sohel",email:"sohel@gmail.com"};
     return(
     <>    

          <div id="cart" className="container">
               <h1 >Props Page</h1>
               <div className="row g-3">
                    <div className="col-lg-4">
                         <PropsChild {...user1} />

                         {/* <PropsChild
                         name="Rahat"
                         email="rahat@gmail.com"
                         round={65}
                         /> */}
                    </div>
                    <div className="col-lg-4">
                         <PropsChild {...user2}/>


                         {/* <PropsChild
                         // name="Sohel"
                         // email="sohel@gmail.com"
                         // round={65}
                         /> */}
                    </div>
               </div>

               <h3>Loop form json data file</h3>

               <div className="row g-3">
                    {
                         Data.map((item)=>
                         <div key={item.id} className="col-lg-4">
                              {/* <PropsChild {...item} /> */}
                              <PropsChild name={item.name} email={item.email} round={item.round} />
                         </div>
                         )
                    }
               </div>
           </div>
     </>

     )
}
export default PropsPage;