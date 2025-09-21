import { useParams } from "react-router-dom"
import Data from "../data.json"
import { Link } from "react-router-dom";


function UserProfile(){
     const params = useParams<{id: string}>();
     // console.log(params)
     const user = Data.find((item)=>item.id == Number(params.id));
     // console.log(user)
     return(
          <>
          <div className="container">
          <h1>User Profile</h1>
               <div className="row">
                    <div className="col-lg-6 ">
                         <div className="card">
                              <div className="card-header bg-info text-center">{user?.name}'s Profile</div>
                              <div className="card-body ">
                                   <div >
                                        <b >Id : </b>
                                        {user?.id}
                                   </div>
                                   <div>
                                        <b>Name : </b>
                                        {user?.name}
                                   </div>
                                   <div>
                                        <b>Email : </b>
                                        {user?.email}
                                   </div>
                                   <div>
                                        <b>Round : </b>
                                        {user?.round}
                                   </div>

                              </div>
                         </div>
                       
                    </div>
               </div>

          </div>
          <Link to="/users" className="btn btn-info">Back</Link>
          </>
     )
}
export default UserProfile