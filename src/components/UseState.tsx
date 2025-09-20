import {useState} from 'react'


//only export use korle object ar name ja ache tai diye import korte hobe
// import {baselink} from "./Config";
//6 no alternative 7 line
// import {baselink as blink} from "./Config";

//export default use korle jekono name e import korte hobe


function UseState() {
     // function like(){
     //      // return alert("hello");
     //      // let like= 0;
     //      // like ++;
     //      // return alert (like);
     //      // document.writeln(JSON.stringify(like))
     //      // console.log(like);

     // }

     const [like, setLike] = useState(0);
     // useState build-in 
  return (
     <>
          <div className="container text-center">
               <div>UseState</div>
               {/* for 7 line  */}
               {/* {blink.link}  */}
               {/* {baselink.link} */}
               <h2>Like: {like}</h2>
               <button onClick={()=>setLike(like +1)}>👍</button>

               {like >0 && <button onClick={()=>setLike(like -1)}>👎</button>}
          </div>
     </>
  )
}
export default UseState
