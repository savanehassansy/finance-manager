import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';

export const routes: Routes = [
    {
        path:'dash',
        component: DashboardComponent
    }, 
    {
        path:'',
        component: ToolbarComponent
    }, 
    
];
