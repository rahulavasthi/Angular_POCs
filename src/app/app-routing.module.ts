import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {Sidebar2Component} from './sidebar2/sidebar2.component';
import {Dashboard2Component} from './dashboard2/dashboard2.component';
import {Dashboard3Component} from './dashboard3/dashboard3.component';
import {Poc1Component} from './poc1/poc1.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'sidebar', component: SidebarComponent },
{ path: 'sidebar2', component: Sidebar2Component },
{ path: 'dashboard2', component: Dashboard2Component },
{ path: 'dashboard3', component: Dashboard3Component },
{ path: 'poc1', component: Poc1Component },
{ path: '', component: HomeComponent }
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }