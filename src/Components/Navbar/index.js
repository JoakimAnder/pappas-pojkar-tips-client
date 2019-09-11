import React from "react";

export default function Navbar(props) {


    return (
        <nav className="nav-header">
            <ul className="nav justify-content-end">
                <li className="nav-item mr-2">
                    <button onClick={e => props.setPage("game")}>Home</button>
                </li>
                <li className="nav-item mr-2">
                    <button onClick={e => props.setPage("profile")}>Profile</button>
                </li>
                <li className="nav-item mr-2">
                    <button onClick={e => props.setPage("About")}>About</button>
                </li>
                <li className="nav-item mr-2">
                    <button onClick={e => {
                        props.setPage("login");
                        props.setUser({});
                    }}>Log Out</button>
                </li>
            </ul>

        </nav>
    )
}