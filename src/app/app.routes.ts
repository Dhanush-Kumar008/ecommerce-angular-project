import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { Component } from '@angular/core';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductComponent } from './pages/website/category-product/category-product.component';
import { WebProductComponent } from './pages/website/web-product/web-product.component';
import { Login2Component } from './pages/website/login2/login2.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"",redirectTo:"login2",pathMatch:"full"},

    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"product",
                component:ProductsComponent
            },
            {
                path:"category",component:CategoriesComponent
            }
        ]
    },

    {
        path:"login2",
        component:Login2Component
    },

    {
        path:"",
        component:LandingComponent,
        children:[

            {
                path:"categoryproduct/:id",component:CategoryProductComponent
            },

            {
                path:"shop",component:WebProductComponent
            }   
        ]
    },
];
