import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PagesService } from './pages.service';
import { AppRoutingModule } from './app-routing.module';
import { ImagesComponent } from './images/images.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ImagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
