import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class PresentionActions {
  static readonly NEXT_SLIDE = 'NEXT_SLIDE';
  static readonly PREV_SLIDE = 'PREV_SLIDE';

  increment(): Action {
    return { type: PresentionActions.NEXT_SLIDE };
  }

  decrement(): Action {
    return { type: PresentionActions.PREV_SLIDE };
  }
}
