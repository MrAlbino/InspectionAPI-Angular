import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { PenaltyFormComponent } from './penalty/penalty-form/penalty-form.component';
import { PenaltyResultComponent } from './penalty/penalty-result/penalty-result.component';

import { PenaltyApiService } from './penalty-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PenaltyComponent,
    PenaltyFormComponent,
    PenaltyResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PenaltyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
