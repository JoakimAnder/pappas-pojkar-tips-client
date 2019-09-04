import React, {useState, useEffect} from "react"
import Leaderboard from "../Leaderboard";
import {updateUser , updatePassword, deleteUser}   from "../../ApiRequest";

const axios = require("axios");

export default function Profile(props) {
    const user = props.user;


    if(user === null || Object.keys(user).length === 0) {
        props.setError("You are not logged in!");
        props.setPage("login");
        return <div/> //TODO fix
    }

    function changePassword(e) {
        e.preventDefault();

        if(e.target.newPassword1.value !== e.target.newPassword2.value ){
            props.setError("The password does not match")

        }else{


        let newUser = JSON.parse(JSON.stringify(user));
        let oldPassword = e.target.oldPassword.value;
        newUser.password = e.target.newPassword1.value;

        updatePassword(newUser,props.setError,props.setUser,oldPassword);
        }
        e.target.oldPassword.value = ""
        e.target.newPassword1.value = ""
        e.target.newPassword2.value = ""


    }
    function changeInfo(e) {
        e.preventDefault();
       let newUser = JSON.parse(JSON.stringify(user)) ;
        newUser.name = e.target.name.value;
        newUser.email= e.target.email.value;
        newUser.nickname = e.target.nickname.value;
        newUser.phone = e.target.phone.value;

        updateUser(newUser,props.setError,props.setUser);


    }
    function deleteAccount() {
        deleteUser(user,props.setError, () => {
            props.setPage("login");
            props.setUser({});
        });
    }




    return (
        <div className={"container"}>
            <div className={"row"}>
            <div className={"d-none d-md-block col-md-2"}>
                <Leaderboard
                    showUser={user}
                />
            </div>
            <main className={"card p-0 col-12 col-md-10"}>
                {/*Profile Info*/}
                <h1>Profil</h1>
                <div className={"row"}>
                        <div className={"col-md-9"}>
                            <div className={"form-group row m-0"}>
                                <label htmlFor={"staticName"} className={"col-sm-3 col-form-label text-right"}>Name:</label>
                                <label id={"staticName"} className={"col-sm-9 text-left m-0 align-self-center"}>{user.name}</label>
                            </div>
                            <div className={"form-group row m-0"}>
                                <label htmlFor={"staticNickname"} className={"col-sm-3 col-form-label text-right"}>Nickname:</label>
                                <label id={"staticNickname"} className={"col-sm-9 text-left m-0 align-self-center"}>{user.nickname}</label>
                            </div>
                            <div className={"form-group row m-0"}>
                                <label htmlFor={"staticEmail"} className={"col-sm-3 col-form-label text-right"}>Email:</label>
                                <label id={"staticEmail"} className={"col-sm-9 text-left m-0 align-self-center"}>{user.email}</label>
                            </div>
                            <div className={"form-group row m-0"}>
                                <label htmlFor={"staticPhone"} className={"col-sm-3 col-form-label text-right"}>Phone:</label>
                                <label id={"staticPhone"} className={"col-sm-9 text-left m-0 align-self-center"}>{user.phone}</label>
                            </div>
                        </div>
                        <div className={"col-md-3 offset-2 offset-md-0"}>
                            <div className={"row"}>
                                <label>Paystatus: {user.payStatus}</label>
                            </div>
                        </div>
                </div>

                {/*Edit Profile*/}
                <div>
                    <button
                        className={"my-2 btn btn-danger"}
                        type={"button"}
                        data-toggle={"collapse"}
                        data-target={"#editInformation"}
                        aria-controls={"editInformation"}
                        aria-expanded={"false"}
                        aria-label={"Toggle Edit Information"}
                    >
                        Edit Information
                    </button>
                    <div className={"collapse mt-3"} id={"editInformation"}>
                        <div className={"row"}>
                            <form className={"col-md-6"} onSubmit={changeInfo}>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticEditName"} className={"col-sm-3 col-form-label text-right"}>Name:</label>
                                    <div className={"col-sm-9"}>
                                        <input type={"text"} name={"name"} className={"form-control"} id={"staticEditName"} defaultValue={user.name}
                                               required/>
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticEditNickname"} className={"col-sm-3 col-form-label text-right"}>Nickname:</label>
                                    <div className={"col-sm-9"}>
                                        <input type={"text"} name={"nickname"} className={"form-control"} id={"staticEditNickname"} defaultValue={user.nickname}/>
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticEditEmail"} className={"col-sm-3 col-form-label text-right"}>Email:</label>
                                    <div className={"col-sm-9"}>
                                        <input type={"email"} name={"email"} className={"form-control"} id={"staticEditEmail"} defaultValue={user.email}
                                        required/>
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticEditPhone"} className={"col-sm-3 col-form-label text-right"}>Phone:</label>
                                    <div className={"col-sm-9"}>
                                        <input type={"text"} name={"phone"} className={"form-control"} id={"staticEditPhone"} defaultValue={user.phone}
                                               required/>
                                    </div>
                                </div>
                                <div className={"form-group row justify-content-center"}>
                                    <button type={"submit"} className={"item btn btn-primary"}
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                            <form className={"col-md-6"} onSubmit={changePassword}>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticOldPassword"} className={"col-sm-3 col-form-label"}>Old Password:</label>
                                    <div className={"col-sm-9"}>
                                        <input required type={"password"} name={"oldPassword"} className={"form-control"} id={"staticOldPassword"} />
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticNewPassword1"} className={"col-sm-3 col-form-label"}>New Password:</label>
                                    <div className={"col-sm-9"}>
                                        <input required type={"password"} name={"newPassword1"} className={"form-control"} id={"staticNewPassword1"}/>
                                    </div>
                                </div>
                                <div className={"form-group row"}>
                                    <label htmlFor={"staticNewPassword2"} className={"col-sm-3 col-form-label"}>Confirm Password:</label>
                                    <div className={"col-sm-9"}>
                                        <input required type={"password"} name={"newPassword2"} className={"form-control"} id={"staticNewPassword2"}/>
                                    </div>
                                </div>
                                <div className={"form-group row justify-content-center"}>
                                    <button type={"submit"} className={"item btn btn-danger"}>
                                        Change password
                                    </button>
                                </div>
                            </form>
                        </div>
                        <button className={"btn btn-danger m-4 justify-self-center"} onClick={deleteAccount}>Delete Account</button>
                    </div>
                </div>
            </main>
        </div>
        </div>
    )

}