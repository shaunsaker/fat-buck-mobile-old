import { combineReducers } from 'redux';
import { sideMenuReducer } from '../sideMenu/reducer';
import { SideMenuState } from '../sideMenu/models';
import { exchangesReducer } from '../exchanges/reducer';
import { ExchangesState } from '../exchanges/models';
import { authReducer } from '../auth/reducer';
import { AuthState } from '../auth/models';
import { stocksReducer } from '../stocks/reducer';
import { StocksState } from '../stocks/models';

export interface ApplicationState {
  sideMenu: SideMenuState;
  exchanges: ExchangesState;
  auth: AuthState;
  stocks: StocksState;
}

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  exchanges: exchangesReducer,
  auth: authReducer,
  stocks: stocksReducer,
});

export const initialState = rootReducer(undefined, { type: '' });

export default rootReducer;
