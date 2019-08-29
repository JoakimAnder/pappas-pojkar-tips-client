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
        const password2 = e.target["confirm-password"].value;

        if(password !== password2) {
            props.setError("Passwords doesn't match");


            e.target.password.focus();
            return;
        }


        axios.post("http://diceit.itancan.com:8604/addUser", {
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

    function formField(field, type="text", required=true) {
        field = String(field).toLowerCase();
        const capitalized = field.split("-")
            .map(w => `${w[0].toUpperCase()}${w.substring(1)}`)
            .join(" ");
        const id = `reg-${field}`;
        return (
            <div className="form-group row">
                <label htmlFor={id} className="col-sm-3 col-md-2 col-form-label text-sm-right" >{capitalized+":"}</label>
                <div className={"col-sm-9 col-md-10"}>
                    <input
                        className={"form-control"}
                        type={type}
                        required={required}
                        id={id}
                        placeholder={`${capitalized}${required? "" : " (optional)"}`}
                        name={field}
                        defaultValue={""}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className={"container"}>
            <main className={"card p-2"}>
                <form onSubmit={submit}>
                    <h1>Register</h1>
                    {formField("email", "email")}
                    {formField("password", "password")}
                    {formField("confirm-password", "password")}
                    {formField("name")}
                    {formField("nickname", "text", false)}
                    {formField("phone")}

                    <button type={"Submit"}>
                        Submit
                    </button>
                </form>
            </main>
        </div>
    )
}