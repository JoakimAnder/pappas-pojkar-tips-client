import React from "react";
import LoginCSS from "./Login-CSS.css";

const axios = require("axios");

export default function Login(props) {

    function login(e) {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;

        axios.post("http://diceit.itancan.com:8604/login", {data:{email:email,password:pass}})
            .then(res => {
                console.log(res)
                if(!res.data.head.successful) {
                    props.setError(res.data.head.message)
                } else {
                    const user = res.data.data;
                    props.setUser(user);
                    props.setToken(user.token);
                    props.setPage("game");
                }
            })
            .catch(console.log);
    }

    return (
        <div className="container">
            <main className="container card p-0">
                <form
                    className="text-center"
                    name={"login"}
                    onSubmit={login}
                    >
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="" className="form-group mr-2" >Username</label>

                    <input
                        required
                        placeholder={"Email"}
                        name={"email"}
                        defaultValue={props.user ? props.user.email : ""}
                    />


                    </div>

                    <div className="form-group">

                        <label htmlFor="" className="form-group mr-2" >Password</label>

                    <input
                        required
                        placeholder={"Password"}
                        name={"password"}
                        defaultValue={""}
                    />
                    </div>

                    <button type={"submit"} className="btn btn-block btn-primary">
                        Login
                    </button>
                </form>
                <button className="btn btn-danger" onClick={() => props.setPage("registration")} >
                    Sign Up!
                </button>
                <button onClick={() => props.setPage("profile")}>
                    Go to profile
                </button>
            </main>
            <footer><p>Copyright &copy;</p></footer>
        </div>
    )
}



