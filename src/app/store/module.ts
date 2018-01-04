import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import { createLogger } from 'redux-logger';

import { IAppState } from './model';
import { rootReducer } from '../reducers/reducers';

@NgModule({
    imports: [NgReduxModule, NgReduxRouterModule],
    providers: [],
  })
  export class StoreModule {
    constructor(
      public store: NgRedux<IAppState>,
      devTools: DevToolsExtension
    ) {
      // Tell Redux about our reducers and epics. If the Redux DevTools
      // chrome extension is available in the browser, tell Redux about
      // it too.
      store.configureStore(
        rootReducer,
        {},
        [ createLogger() ],
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
  }
