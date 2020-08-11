import { combineReducers } from 'redux';
import { sideMenuReducer } from '../sideMenu/reducer';
import { SideMenuState } from '../sideMenu/models';
import { exchangesModalReducer } from '../exchangesModal/reducer';
import { ExchangesModalState } from '../exchangesModal/models';

export interface ApplicationState {
  sideMenu: SideMenuState;
  exchangesModal: ExchangesModalState;
}

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  exchangesModal: exchangesModalReducer,
});

export default rootReducer;
