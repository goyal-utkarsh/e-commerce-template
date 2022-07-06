import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    TopBarComponent,
    SideBarComponent,
    MainBarComponent,
    BottomBarComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }