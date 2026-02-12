import { Routes } from '@angular/router';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Profile } from './page/profile/profile';
import { CustomerManage } from './page/customer-manage/customer-manage';
import { Login } from './page/login/login';

export const routes: Routes = [

    {
        path: 'contact',
        component: Contact
    },
    {
        path:'home',
        component:Home   
    },
    {
        path:'about',
        component:About
    },
    {
        path:'profile',
        component:Profile   
    },
    {
        path:'cus',
        component:CustomerManage   
    },
    {
        path:'login',
        component: Login
    }
    

];
