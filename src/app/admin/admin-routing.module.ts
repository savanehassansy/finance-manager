import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ExpensesComponent } from './features/expenses/expenses.component';

const routes: Routes = [

 
  {
    path:'',
    component:AdminComponent,
    children:[
      { 
        path: 'dashboard', 
        component: DashboardComponent 
      },
      { 
        path: 'expenses', 
        component: ExpensesComponent 
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
