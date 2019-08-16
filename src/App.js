import React, { useState } from 'react';

import './App.css';
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Registration from "./Components/Registration";



function App() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");


  function parseState(page) {
    switch (page) {
      case "profile": return <Profile setPage={setPage} user={user} setError={setErrorMsg}/>;
      case "registration": return <Registration
          setError={setErrorMsg}
          setUser={setUser}
          setPage={setPage}
      />;
      default: return <Login
          setError={setErrorMsg}
          setToken={setToken}
          setUser={setUser}
          setPage={setPage}
          user={user}
      />;

    }
  }



  return (
    <div className="App">
      <h4>{errorMsg}</h4>
      {parseState(page)}
    </div>
  );
}

export default App;
