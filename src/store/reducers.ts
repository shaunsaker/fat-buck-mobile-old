import { combineReducers } from 'redux';
import { sideMenuReducer } from '../sideMenu/reducer';
import { SideMenuState } from '../sideMenu/models';

export interface ApplicationState {
  sideMenu: SideMenuState;
}

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
});

export default rootReducer;
