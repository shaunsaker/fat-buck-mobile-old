import { combineReducers } from 'redux';
import { sideMenuReducer } from '../sideMenu/reducer';
import { SideMenuState } from '../sideMenu/models';
import { exchangesModalReducer } from '../exchangesModal/reducer';
import { ExchangesModalState } from '../exchangesModal/models';
import { exchangesReducer } from '../exchanges/reducer';
import { ExchangesState } from '../exchanges/models';

export interface ApplicationState {
  sideMenu: SideMenuState;
  exchangesModal: ExchangesModalState;
  exchanges: ExchangesState;
}

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  exchangesModal: exchangesModalReducer,
  exchanges: exchangesReducer,
});

export default rootReducer;
