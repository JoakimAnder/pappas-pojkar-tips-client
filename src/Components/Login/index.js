import React from "react";
import LoginCSS from "./Login-CSS.css";
import {loginUser} from "../../ApiRequest";


export default function Login(props) {

    function login(e) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        function succ(u) {
            props.setUser(u);
            props.setPage("game")
        }
        loginUser({email,password}, succ, props.setError);
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



