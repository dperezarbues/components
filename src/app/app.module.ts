import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludaComponent } from './saluda/saluda.component';
import { SuperheroComponent } from './superhero/superhero.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludaComponent,
    SuperheroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
