import { tabs } from 'config';

export interface ICommonReducer {
  activeTab: typeof tabs[number];
}

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export interface ISetCurrentTabAction {
  type: typeof SET_ACTIVE_TAB;
  payload: typeof tabs[number];
}

export type CommonActionTypes = ISetCurrentTabAction;
