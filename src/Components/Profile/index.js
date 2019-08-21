import React, {useState} from "react"

const axios = require("axios");

export default function Profile(props) {
    const [loginMsg, changeLoginMsg] = useState("I don't know!");
    const user = props.user;

    if(user === null) {
        props.setError("You are not logged in!");
        props.setPage("login")
        return <div/>
    }

    function check() {
        axios.post(`http://diceit.itancan.com:8604/IsLoggedIn?email=${user.email}&token=${user.token}`)
            .then(res => {
                return (res.status == 200) ? res.data : "I don't know! (Something went wrong)";
            }).then(changeLoginMsg)
    }

    return (
        <div>
            <nav>
                <button onClick={() => props.setPage("login")}>Go to login</button>
            </nav>
            <main>
                <span><h3>Name: </h3><p>{user.name}</p></span>
                <span><h3>Nickname: </h3><p>{user.nickname}</p></span>
                <span><h3>Phone: </h3><p>{user.phone}</p></span>
                <span><h3>Paystatus: </h3><p>{user.paystatus}</p></span>

                <button onClick={check}>
                    Check if logged in
                </button>
                <h2>{loginMsg}</h2>
            </main>
            <footer>footer</footer>
        </div>
    )

}