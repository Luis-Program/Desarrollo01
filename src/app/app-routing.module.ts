import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {
    path: 'Home',
    component: AppComponent
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
