import React from "react"

const axios = require("axios");

export default function Registration(props) {

    function submit(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const nickname = e.target.nickname.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        axios.post("http://localhost:8080/addUser", {
            data: {
                name: name,
                nickname: nickname,
                phone: phone,
                email: email,
                password: password
            }
        }).then(res => {
            if (!res.data.head.successful) {
                props.setError(res.data.head.message)
            } else {
                props.setUser(res.data.data);
                props.setPage("login");
            }
        })



    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    required
                    name={"email"}
                    placeholder={"Email"}
                />
                <input
                    required
                    name={"password"}
                    placeholder={"Password"}
                />
                <input
                    required
                    name={"name"}
                    placeholder={"Name"}
                />
                <input
                    name={"nickname"}
                    placeholder={"Nickname (optional)"}
                />
                <input
                    required
                    name={"phone"}
                    placeholder={"Phone"}
                />

                <button type={"Submit"}>
                    Submit
                </button>
            </form>
        </div>
    )
}