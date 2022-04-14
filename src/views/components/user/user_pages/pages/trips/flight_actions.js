import React from 'react'
import api from '../../../../actions/apiServices'


    export const SearchInternationalFlightsReturn = (data = {}) => {
        const responseData = null
        api.fetch('/api/trips/international_flights', data, true)
        .then((res) => {
            responseData = res.data
        }).catch(console.error())
        return responseData
    }


    export const SearchInternationalFlightsOneway = (data = {}) => {
        const responseData = null
        api.fetch('/api/trips/international_flights', data, true)
        .then((res) => {
            responseData = res.data
            console.log(responseData)
        }).catch(console.error())
        GetFlightResponseData(responseData)
    }

    const GetFlightResponseData = (data) =>{
        return data
    }
export default GetFlightResponseData