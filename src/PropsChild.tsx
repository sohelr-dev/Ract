// interface User{
//      name?:string;
//      email?:string;
//      round?:number;
// }
function PropsChild({name="IsDB Trainee",email="Not Found",round=65}){
     return(
         
          <div className="card">
               <h5 className="card-header">{name}</h5>
               <div className="card-boby">
                    <h6 className="p-2"> Email : {email}</h6>
                    <h6 className="p-2"> Round : {round}</h6>
               </div>
          </div>
      
     )
}
export default PropsChild