import React, {useState} from "react";
import axios from "axios";
import {User} from "./ApiReq"


//  extra code startds here
function Userlist() {
  const [user, setUser] = useState("");
  const [user2, setUser2] = useState("");
  const [user3, setUser3] = useState("");



// extra code ends here 

  function getGraph() {
    axios.get("http://localhost:8001/graph",  { crossdomain: true }).then(response => {
      setUser3(response.data);
      
    });
  }


  function getQuote() {
    axios.get("http://localhost:8001/total",  { crossdomain: true }).then(response => {
      setUser(response.data);
      
    });
  }

  function getuser() {
    axios.get("http://localhost:8001/signup",  { crossdomain: true }).then(response => {
      setUser2(response.data);
      
    });
  }
return (
    <div>
      
      <button onClick={getQuote} style={{marginTop:"6%",marginLeft:"50%"}}>
       total user
      </button>
      <h1 style={{marginTop:"10%",marginLeft:"50%"}}>{user}</h1>
      {/* second button */}
      <button onClick={getuser} style={{marginLeft:"50%",marginBottom:"10%"}}>
       refral user
      </button>
        <h3 style={{marginTop:"2%",marginLeft:"50%"}}> {JSON.stringify(user2)}</h3>

{/* give the  hiearchy graph */}
        <button onClick={getGraph} style={{marginTop:"6%",marginLeft:"50%"}}>
       total user
      </button>
      <h5 id="mainContainer" class="clearfix"> {JSON.stringify(user3)}</h5>


  </div>
  )
}
export default Userlist;