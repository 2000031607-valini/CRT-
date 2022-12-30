import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [


  {
    path:'home',
    component:HomeComponent

  },{
    path:'rform',
    component:ReactiveformComponent
  },
  
  {
    path:'binding',
    component:BindingComponent

  },
  {
    path:'forms',
    component:FormsComponent
  },
  {
    path:'directive',
    component:DirectiveComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
