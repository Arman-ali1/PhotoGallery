import { useEffect, useState } from "react";
import "./App.css";
import Registration from "./components/Registration.jsx";
import Home from "./components/Home.jsx";
import axios from "axios";
import User from "./components/User.jsx";

function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    axios
      .get("/api/users")
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },[setUser]);
  return (
    <>
      <h1>Gallery Photo App</h1>
      <div>
      <Registration />
      </div>
      {user ? (
          user.map((userData, index) => (
            <div className="user">
            <h1>{index +1} . {userData.name}</h1>
            <h1>{userData.mobile}</h1>
            </div>
            // Assuming User component needs individual user data as props
          ))
        ) : (
          <p>Loading...</p>
        )
      }
      
     
      
      
    </>
  );
}

export default App;
