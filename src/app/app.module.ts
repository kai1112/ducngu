import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { TvShowComponent } from './tvshow.component';



@NgModule({
  imports: [BrowserModule,  HttpClientModule, FormsModule],
  declarations: [TvShowComponent],
  bootstrap: [TvShowComponent],
})
export class AppModule {}
