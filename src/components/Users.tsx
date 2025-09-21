import Data from "../data.json"
import { Link } from "react-router-dom"
function Users(){
     return (
          <>
          <div className="container">
               <h1>
                    User Page
               </h1>
               <div>               
                    <ul>
                    {
                         Data.map((item)=>
                         <li key={item.id}>
                              <Link to={`/user/${item.id}`}>{item.name}</Link>
                         </li>
                         
                         )
                    }
                    </ul>
               </div>
          </div>
          </>
     )
    

}
export default Users