import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { ContactusComponent } from './contactus/contactus.component';
import {FormsModule} from '@angular/forms';
import { StylesComponent } from './styles/styles.component';

import { CustomDirective } from './custom.directive';
import { PipesPipe } from './pipes.pipe';
import { PipescComponent } from './pipesc/pipesc.component';
import { EmpComponentComponent } from './emp-component/emp-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    ProductComponent,
    OrderComponent,
    ContactusComponent,
    StylesComponent,
    CustomDirective,
    PipesPipe,
    PipescComponent,
    EmpComponentComponent
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
