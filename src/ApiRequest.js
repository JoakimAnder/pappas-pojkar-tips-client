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
    axios.delete(`http://diceit.itancan.com:8605/user/${user.id}?token=${user.token}`,user)
        .then(response => {
            if(response.data) console.log("DELETED")
        })
        .catch((error) =>{
            setErrorMsg(error.response.data.message)
        })
}

export function registerUser(user, successful, error) {
    axios.post("http://diceit.itancan.com:8604/addUser", {
        data: {
            name: user.name,
            nickname: user.nickname,
            phone: user.phone,
            email: user.email,
            password: user.password
        }
    }).then(res => {
        if (!res.data.head.successful) {
            error(res.data.head.message);
        } else {
            successful(res.data.data);
        }
    }).catch(console.error);
}

export function loginUser(user, successful, error) {
    axios.post("http://diceit.itancan.com:8604/login", {data:{email:user.email,password:user.password}})
        .then(res => {
            console.log(res)
            if(!res.data.head.successful) {
                error(res.data.head.message)
            } else {
                successful(res.data.data);
            }
        })
        .catch(console.error);
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