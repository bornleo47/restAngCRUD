import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListusersComponent } from './components/listusers/listusers.component';
import {UserformComponent} from './components/userform/userform.component';

const routes: Routes = [
  {path:'', redirectTo:'/employees', pathMatch:'full'}, 
  {path:'form', component:UserformComponent},
{path:'employees', component:ListusersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
