import { combineReducers } from 'redux';
import WalletReducers from "../reducers/WalletReducer";
import TransferReducer from "../reducers/TransferReducer";
import WithdrawReducer from "../reducers/WithdrawReducer";


const appReducer = combineReducers({
  wallet: WalletReducers,
  transfer: TransferReducer,
  withdraw: WithdrawReducer
});

export default appReducer;