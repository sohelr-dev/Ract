function Event(){
     function handleClick(){
          alert("another Hello");
     }
     return(
          <>
          <h1>event</h1>
          <button onClick={()=>alert("hello")}>Click me </button>
          <button onClick={handleClick}>Click Another</button>
          
          
          </>
          
     )
}
export default Event