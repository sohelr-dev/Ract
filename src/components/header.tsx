import { Link } from "react-router-dom"

function Header(){
     return(
          <>          
          <nav className="nav nav-link">
               <Link to="/">Home</Link>
               <span> | </span>
               <Link to="/">About</Link>
               <span> | </span>
               <Link to="/props">PropsPage</Link>
               <span> | </span>
               <Link to="/like">Like</Link>
               <span> | </span>
               <Link to="/users">Users</Link>
               <Link to="/login">Login</Link>
          </nav>
          <Link to="/login" className="btn btn-primary">Login</Link>
          </>

     )
}
export default Header