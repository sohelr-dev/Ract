import { Link } from "react-router-dom";

function PageNotFound(){
     return(
          <>
          <div className="text-center container">
               <h1 className="text-danger justify-content-center mt-4">404 Not Found</h1>
               <Link to="/" className="btn btn-primary">Back to Home </Link>

          </div>
          </>
     )
}
export default PageNotFound;