import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {
    path: 'Home',
    component: HomeComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
