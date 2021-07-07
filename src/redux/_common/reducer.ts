import { tabs } from './../../config/index';
import { CommonActionTypes, ICommonReducer, SET_ACTIVE_TAB } from 'redux/_common/types';

const initialState: ICommonReducer = { activeTab: tabs[0] };

export default (state = initialState, action: CommonActionTypes): ICommonReducer => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };

    default:
      return state;
  }
};
