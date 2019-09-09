import React, { useState } from 'react';

import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";
import ErrorMessage from "./Components/ErrorMessage";
import Game from "./Components/Game";
import GhostQuiz from "./Components/Game/QuizWindow/GhostQuiz";



function App() {
  const [page, setPage] = useState("game");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({attemptedLogins: 0,
    email: "kayani@gmail.com",
    id: 4,
    lastLogin: 1568027091,
    loginDeniedUntil: 0,
    name: "mehtab",
    nickname: "",
    password: "10d1de1511851db17d1a51c811f10f1a711619615016e14f",
    payStatus: 99,
    phone: "0975346890",
    token: "ZPJRBGmvJfNgqrj9YM5H",
    tokenLastValidDate: 1568027991});
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
      // case "ghostQuiz": return <GhostQuiz/>
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
