import {Link} from "react-router-dom"
function Login(){
     return(
          <>
               <div className="container">
                    <h1>Login page</h1>
                    <div className="align-item-center mb-2">
                         <form action="" method="post">
                         <label htmlFor="name" className="form-label">Name</label>
                         <input type="text" name="name" id="name" className="form-control" />
                         </form>
                    </div>
                    <Link to="/" className="btn btn-secondary">Back To Home</Link>
               </div>
          </>
     )
}
export default Login