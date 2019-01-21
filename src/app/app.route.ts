import { Routes, RouterModule } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import {SidebarComponent} from './sidebar/sidebar.component';

const router :  Routes = [    


    { path: 'dashboard1', component: Dashboard1Component },
	{ path: 'sidebar', component: SidebarComponent }
	

    ]

export const appRouter = RouterModule.forRoot(router);