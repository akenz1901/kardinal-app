import React from 'react'
import { combineReducers } from 'redux'

const ADD_FLIGHT = 'ADD_FLIGHT'
const ADD_HOTEL = 'ADD_HOTEL'

export function addSearchedFlights(flightData){
    return{
        type:ADD_FLIGHT,
        flightData
    }
}

const defaultState = {
    data:'Nothing'
}

function flightSearches(state=defaultState, action){
    switch (action.type) {
        case ADD_FLIGHT:
            return state

        default:
            return state.data
    }
};

const flightSearchRes = combineReducers({
    flightSearches
});

export default flightSearchRes;