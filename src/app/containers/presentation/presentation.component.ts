import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { 
  INTRO
} from '../../constants/slides';
import { PresentionActions } from '../../actions/presentationActions';

import { IntroComponent } from '../../components/slides/intro/intro.component';
import { FrameworksComponent } from '../../components/slides/frameworks/frameworks.component';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  // Selecting an immutable object
  @select(['presentation', 'slideIndex']) 
  readonly slideIndex$: Observable<number>;
  @select(['presentation', 'currentSlide']) 
  readonly currentSlide$: Observable<number>;
  @dispatch() increment = () => ({ type: PresentionActions.NEXT_SLIDE });
  @dispatch() decrement = () => ({ type: PresentionActions.PREV_SLIDE });

  constructor() {
  }

  ngOnInit() {}

  ngAfterViewChecked() { 
  }

  incrementClickHandler(){
    this.decrement();
  }

  decrementClickHandler() {
    this.decrement();
  }
}
