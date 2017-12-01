import { AmapComponent } from './amap/amap.component';
import { AuthGuard } from './shared/auth-guard.directive';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeedAuthGuard } from './shared/service/no-auth.directive';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {   path: 'dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard]},
    {
        path: 'echart',
        component: ChartComponent, canActivate: [NeedAuthGuard]
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule', canActivate: [NeedAuthGuard]
    },
    {
        path: 'articles',
        loadChildren: './home/home.module#HomeModule', canActivate: [NeedAuthGuard]
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'editor',
        component: EditorComponent
    },
    {
        path: 'amap',
        component: AmapComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}