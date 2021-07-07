import { ISetCurrentTabAction, SET_ACTIVE_TAB } from './types';

export const setActiveTabAction = (tab: ISetCurrentTabAction['payload']) => ({
  type: SET_ACTIVE_TAB,
  payload: tab,
});
