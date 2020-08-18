import { combineReducers } from 'redux';
import { sideMenuReducer } from '../sideMenu/reducer';
import { SideMenuState } from '../sideMenu/models';
import { exchangesReducer } from '../exchanges/reducer';
import { ExchangesState } from '../exchanges/models';
import { authReducer } from '../auth/reducer';
import { AuthState } from '../auth/models';
import { stocksReducer } from '../stocks/reducer';
import { StocksState } from '../stocks/models';
import { instructionsReducer } from '../instructions/reducer';
import { InstructionsState } from '../instructions/models';

export interface ApplicationState {
  sideMenu: SideMenuState;
  exchanges: ExchangesState;
  auth: AuthState;
  stocks: StocksState;
  instructions: InstructionsState;
}

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  exchanges: exchangesReducer,
  auth: authReducer,
  stocks: stocksReducer,
  instructions: instructionsReducer,
});

export const initialState = rootReducer(undefined, { type: '' });

export default rootReducer;
