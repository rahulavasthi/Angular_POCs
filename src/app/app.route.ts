import { Routes, RouterModule } from '@angular/router';
import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const router :  Routes = [
    { path: '', component: AppComponent },
    { path: 'dashboard', component: DashboardComponent }
    ]

export const appRouter = RouterModule.forRoot(router);