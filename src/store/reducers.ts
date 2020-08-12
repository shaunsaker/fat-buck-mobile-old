import { combineReducers } from 'redux';
import { sideMenuReducer } from '../sideMenu/reducer';
import { SideMenuState } from '../sideMenu/models';
import { exchangesReducer } from '../exchanges/reducer';
import { ExchangesState } from '../exchanges/models';
import { authReducer } from '../auth/reducer';
import { AuthState } from '../auth/models';

export interface ApplicationState {
  sideMenu: SideMenuState;
  exchanges: ExchangesState;
  auth: AuthState;
}

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  exchanges: exchangesReducer,
  auth: authReducer,
});

export default rootReducer;
