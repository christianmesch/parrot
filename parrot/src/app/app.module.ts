import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ParrotifyService } from './services/parrotify.service';
import { AlphabetService } from './services/alphabet.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ParrotifyService, AlphabetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
