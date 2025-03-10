import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SourcesComponent } from './pages/sources/sources.component';

export const routes: Routes = [
    {
        path:'dash',
        component: DashboardComponent
    }, 
    {
        path:'source',
        component: SourcesComponent
    }
];
