import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';

import { MyMaterialModule } from  './../material';


@NgModule({
  declarations: [ProjectListComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MyMaterialModule
  ]
})
export class AdminModule { }
