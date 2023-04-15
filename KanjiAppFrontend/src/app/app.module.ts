import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanjiListComponent } from './kanji-list/kanji-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KanjiListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
