import { Action } from 'redux';
import { tassign } from 'tassign';
import * as PresentationActions from '../actions/presentationActions';
import { 
  INTRO,
  FRAMEWORK
} from '../constants/slides';
import { PresentionActions } from '../actions/presentationActions';

const SLIDES = [
    INTRO,
    FRAMEWORK
];

export interface PresentationState {
  slideIndex: Number;
  currentSlide: string
}

const INITIAL_STATE : PresentationState  = {
  slideIndex: 0,
  currentSlide: SLIDES[0]
}

function nextSlide(state) {
  let nextIndex = state.slideIndex + 1;
  if (nextIndex > SLIDES.length - 1) {
    nextIndex = 0;
  }
  return tassign(state, { slideIndex: nextIndex, currentSlide: SLIDES[nextIndex] });
}

function prevSlide(state) {
  let nextIndex = state.slideIndex - 1;
  if (nextIndex < 0) {
    nextIndex = SLIDES.length - 1;
  }
  return tassign(state, { slideIndex: nextIndex, currentSlide: SLIDES[nextIndex] });
}

export const PresentationReducer = 
function(state: PresentationState = INITIAL_STATE, action: Action): PresentationState {
  const { type } = action;
  switch (type) {
    case PresentionActions.NEXT_SLIDE:
      return nextSlide(state);

    case PresentionActions.PREV_SLIDE:
      return prevSlide(state);

    default:
      return state;
  }
};
