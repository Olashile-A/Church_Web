import { WALLET_ROUTE, TRANSFER_ROUTE, WITHDRAW_ROUTE, RESET } from '../types'

// set all wallet route 
export const setWalletRoute = (route) =>  {
    return {
        type: WALLET_ROUTE,
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