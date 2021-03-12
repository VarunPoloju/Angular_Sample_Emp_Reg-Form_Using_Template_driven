import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { EmpregistrationComponent } from './empregistration/empregistration.component';
import { EmplistComponent } from './emplist/emplist.component';
// import { RemovedemployeesComponent } from './removedemployees/removedemployees.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    EmpregistrationComponent,
    EmplistComponent,
    // RemovedemployeesComponent
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
