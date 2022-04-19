import React from 'react'
import api from '../../../../actions/apiServices'

    export const SearchInternationalFlightsReturn = async (data = {}) =>{
        return await api.fetch('/api/trips/international_flights', data, true)
        .then((res) => {
            responseData = res.data
        }).catch((error) => {console.log(error)})

    }


    export const SearchInternationalFlightsOneway = async (data = {}) => {
        return await api.fetch('/api/trips/international_flights', data, true)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            console.log(res.message)
            if(res.message === 'success'){
                localStorage.setItem("flight", JSON.stringify(res.data))
            }
            else{
                localStorage.setItem("flight", JSON.stringify(res.message))
            }
        }).catch((error) => {console.log(error)})
    }