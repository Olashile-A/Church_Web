import { combineReducers } from 'redux';
import LinkReducers from "./LinkReducer";
import TransferReducer from "../reducers/TransferReducer";
import WithdrawReducer from "../reducers/WithdrawReducer";
import PrayerRequestReduucer from "../reducers/PrayerRequest";
import WalletReducer from "../reducers/WalletReducer";


const appReducer = combineReducers({
  link: LinkReducers,
  transfer: TransferReducer,
  withdraw: WithdrawReducer,
  prayerRequest: PrayerRequestReduucer,
  wallet: WalletReducer
});

export default appReducer;