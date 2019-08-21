import React from "react";

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
                    props.setPage("profile");
                }
            })
            .catch(console.log);
    }

    return (
        <div>
            <nav>
                <button onClick={() => props.setPage("profile")}>
                    Go to profile
                </button>
            </nav>
            <main>
                <form
                    name={"login"}
                    onSubmit={login}
                >
                    <input
                        required
                        placeholder={"Email"}
                        name={"email"}
                        defaultValue={props.user ? props.user.email : ""}
                    />
                    <input
                        required
                        placeholder={"Password"}
                        name={"password"}
                        defaultValue={""}
                    />
                    <button type={"submit"}>
                        Login
                    </button>
                </form>
                <button onClick={() => props.setPage("registration")} >
                    Sign Up!
                </button>
            </main>
            <footer>footer</footer>
        </div>
    )
}



