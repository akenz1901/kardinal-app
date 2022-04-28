import React from 'react'
import api from './apiServices'

const User = async () =>{
    const userRes = ''
    await api.fetch('/auth/user/', {}, true)
    .then((response) =>{
        console.log(response)
        localStorage.setItem('email', (response.email))
    })
    .catch((err) => {console.log(err)})

    if(userRes != ''){
        return userRes
    }else{
        return 'user@kardinal.com'
    }
};
export default User;