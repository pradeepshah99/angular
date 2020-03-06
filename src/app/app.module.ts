import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { CarosoulComponent } from './carosoul/carosoul.component';
import { WelcomemultusComponent } from './welcomemultus/welcomemultus.component';
import { OurbenefitCompComponent } from './ourbenefit-comp/ourbenefit-comp.component';
import { OurprocessCompComponent } from './ourprocess-comp/ourprocess-comp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    FooterCompComponent,
    CarosoulComponent,
    WelcomemultusComponent,
    OurbenefitCompComponent,
    OurprocessCompComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
