import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from '../Components/user.component';
import {AboutComponent} from '../Components/about.component';

const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);