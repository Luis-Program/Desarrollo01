import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
    HomeComponent,
    LoginComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
