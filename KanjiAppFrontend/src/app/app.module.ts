import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanjiListComponent } from './kanji-list/kanji-list.component';
import { FooterComponent } from './footer/footer.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DebugstatuscomponentComponent } from './debugstatuscomponent/debugstatuscomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    KanjiListComponent,
    FooterComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DebugstatuscomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
