
import { combineReducers } from 'redux';
import { PresentationReducer } from './presentation.reducer';

export const rootReducer = combineReducers({
      presentation: PresentationReducer
    });
