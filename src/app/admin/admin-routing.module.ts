import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ExpensesComponent } from './features/expenses/expenses.component';
import { IncomeComponent } from './features/income/income.component';
import { ReportsComponent } from './features/reports/reports.component';
import { BudgetsComponent } from './features/budgets/budgets.component';
import { SharingComponent } from './features/sharing/sharing.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { SettingsComponent } from './features/settings/settings.component';

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
      { 
        path: 'income', 
        component: IncomeComponent 
      },
      { 
        path: 'reports', 
        component: ReportsComponent 
      },
      { 
        path: 'budgets', 
        component: BudgetsComponent 
      },
      { 
        path: 'sharing', 
        component: SharingComponent 
      },
      { 
        path: 'transactions', 
        component: TransactionsComponent 
      },
      { 
        path: 'settings', 
        component: SettingsComponent 
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
