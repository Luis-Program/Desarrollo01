import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ProductEdit',
    component: ProductEditComponent
  },
  {
    path: 'CreateProduct',
    component: CreateComponent
  },
  {
    path: 'EditProduct',
    component: EditComponent
  },
  {
    path: 'ViewProduct',
    component: ViewComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
