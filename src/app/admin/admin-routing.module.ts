import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from  './login/login.component';
import { ProjectListComponent } from  './project-list/project-list.component';

const routes: Routes = [
    {
      path: 'admin/list',
      component:  ProjectListComponent
    },
    {
        path: 'admin/login',
        component:  LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
