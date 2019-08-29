import axios from 'axios';



export  function updatePassword(user,setErrorMsg,setUser,oldPassword) {
    axios.put(`http://diceit.itancan.com:8605/user/${user.id}/password?token=${user.token}&oldPassword=${oldPassword}`, user)
        .then(response => {
           if(response.data) console.log("PASSWORD CHANGED")
        })
        .catch((error)=>{
            setErrorMsg(error.response.data.message)
        })

}


export function updateUser(user,setErrorMsg,setUser) {
    axios.put(`http://diceit.itancan.com:8605/user/${user.id}?token=${user.token}`, user)
        .then(response => {
            setUser(response.data)
        })
        .catch((error)=> {
            setErrorMsg(error.response.data.message)
        })
}

export function deleteUser(user,setErrorMsg){
    fetch(`http://diceit.itancan.com:8605/user/${user.id}?token=${user.token}`, {
        method: "delete",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(b => {
            if(b) console.log("deleted")
        })
}

// fetch(`http://diceit.itancan.com:8605/user/${user.id}?token=${user.token}`,{
//     method: "put",
//     headers: {
//       "content-type": "application/json"
//     },
//     body:  JSON.stringify(user)
//
// }).then(res => res.json())
//     .then(console.log)
//     .catch(res => {
//         res = res.json();
//         console.error(res)
//     })