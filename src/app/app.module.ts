import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import { AppComponent } from './app.component';

// This app's ngModules
import { StoreModule } from './store/module';
import { IntroComponent } from './components/slides/intro/intro.component';
import { BaseSlideComponent } from './components/slides/base-slide/base-slide.component';
import { FrameworksComponent } from './components/slides/frameworks/frameworks.component';
import { PresentationComponent } from './containers/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    BaseSlideComponent,
    FrameworksComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
