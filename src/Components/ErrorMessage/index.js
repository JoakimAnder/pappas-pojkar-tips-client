import React from "react";

export default function ErrorMessage(props) {

    return (
        <div
            className={"toast show mx-auto"}
            role={"alert"}
            aria-live={"assertive"}
            aria-atomic={"true"}
        >
            <div className={"toast-header"}>
                <strong className={"mr-auto"}>Error</strong>
                <button type={"button"} className={"ml-2 mb-1 close"} onClick={props.remove}>
                    <small>close</small>
                    <span aria-hidden={true}>&times;</span>
                </button>
            </div>
            <div className={"toast-body text-danger"}>
                {props.error}
            </div>
        </div>
    )
}