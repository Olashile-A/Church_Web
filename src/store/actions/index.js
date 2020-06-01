import { LINK_ROUTE, TRANSFER_ROUTE, WITHDRAW_ROUTE, RESET, PRAYER_REQUEST, WALLET } from '../types'

// set all wallet route 
export const setLinkRoute = (route) =>  {
    return {
        type: LINK_ROUTE,
        payload: route
    };
       
}

export const setTransferRoute = (route) =>  {
    return {
        type: TRANSFER_ROUTE,
        payload: route
    };
       
}

export const setWithrawRoute = (route) =>  {
    return {
        type: WITHDRAW_ROUTE,
        payload: route
    };
       
}

export const setReset = (route) =>  {
    return {
        type: RESET,
        payload: route
    };
       
}

export const setPrayerRequest = (request) =>  {
    return {
        type: PRAYER_REQUEST,
        payload: request
    };
       
}

export const setWallet = (request) =>  {
    return {
        type: WALLET,
        payload: request
    };
       
}