import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanjiListComponent } from './kanji-list/kanji-list.component';
import { FooterComponent } from './footer/footer.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DebugstatuscomponentComponent } from './debugstatuscomponent/debugstatuscomponent.component';
import { NameInputDisplayComponent } from './name-input-display/name-input-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KanjiListComponent,
    FooterComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DebugstatuscomponentComponent,
    NameInputDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
