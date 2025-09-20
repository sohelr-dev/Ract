//json data niye asa
import Data from "../data.json"
function Loop (){
     return (
          <>
               <div>
                    <h1>loop</h1>
               </div>
               {/* {console.log(Data)} */}
               {/* {document.writeln(JSON.stringify(Data))} */}
               <table className="table ">
                    <thead>
                         <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Round</th>
                              <th scope="col">Email</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              // Data.map((item)=>{
                              //      return(
                              //           <tr key={item.id}>
                              //                <td>{item.id}</td>
                              //                <td>{item.name}</td>
                              //                <td>{item.round}</td>
                              //                <td>{item.email}</td>
                              //           </tr>
                              //      )
                              // })
                              //single statment ar jonno arrow function e {} mendetory na and return use kora jabe  na 
                              //single statment na hoile always {} use korte hobe and return use korte hobe 
                              Data.map((item)=>
                                   <tr key={item.id}>
                                             <td>{item.id}</td>
                                             <td>{item.name}</td>
                                             <td>{item.round}</td>
                                             <td>{item.email}</td>
                                        </tr>
                              )
                         }
                    </tbody>
               </table>
          </>
     )
}
export default Loop