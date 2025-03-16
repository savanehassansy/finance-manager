import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/features/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    },
  

    
];
