import { Routes, RouterModule } from '@angular/router';
import { Poc1Component } from './poc1/poc1.component';
import { Poc2Component } from './poc2/poc2.component';
import { HomeComponent } from './home/home.component';

const router :  Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: Poc1Component },
    { path: 'sidebar', component: Poc2Component }
    ]

export const appRouter = RouterModule.forRoot(router);