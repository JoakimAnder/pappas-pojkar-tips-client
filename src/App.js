import React, { useState } from 'react';

import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";
import ErrorMessage from "./Components/ErrorMessage";
import Game from "./Components/Game";



function App() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [errorMsgs, setErrorMsgs] = useState([]);
  function removeError(index) {
    setErrorMsgs(errorMsgs.filter((e,ei) => ei !== index))
  }

  function addError(error) {
    setErrorMsgs(errorMsgs.concat(error))
  }


  function parseState(page) {
    switch (page) {
      case "profile": return <Profile setPage={setPage} user={user} setError={addError} setUser={setUser}/>;
      case "game": return <Game />;
      case "registration": return <Registration
          setError={addError}
          setUser={setUser}
          setPage={setPage}
      />;
      default: return <Login
          setError={addError}
          setToken={setToken}
          setUser={setUser}
          setPage={setPage}
          user={user}
      />;

    }
  }



  return (
    <div className="App">
      <Navbar setPage={setPage} setUser={setUser}/>
      {errorMsgs.map((error, index) =>
          <ErrorMessage
              key={index}
              error={error}
              remove={() => removeError(index)}
          />)
      }
      {parseState(page)}
    </div>
  );
}

export default App;
