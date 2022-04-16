import React from 'react'
import api from '../../../../actions/apiServices'


const flightCategories = {

    SearchInternationalFlightsReturn(data = {}) {
        const responseData = null
        api.fetch('/api/trips/international_flights', data, true)
        .then((res) => {
            responseData = res.data
        }).catch(console.error())
        return responseData
    },


    SearchInternationalFlightsOneway(data = {}){
        const responseData = null
        api.fetch('/api/trips/international_flights', data, true)
        .then((res) => {
            responseData = res.data
            console.log(responseData)
        }).catch(console.error())
    },
    
    data: '',
}
export default SearchInternationalFlightsOneway