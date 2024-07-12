import "./App.css";
import { useState } from "react";
import React from "react";


function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let res = await fetch("https://mern-deploy-backend.vercel.app/users");
    console.log("res", res);
    let usersList = await res.json();
    console.log(usersList)
    setUsers(usersList);
  };

  //useEffect(()=>{getUsers()},[])

  return (
    <>
      <button onClick={getUsers}>Users</button>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
          <h1>{user.name}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
