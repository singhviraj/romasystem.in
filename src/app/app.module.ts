
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { AboutComponent } from './about/about.component';
import { BackgroundDirective } from './background.directive';
import { MouseoverDirective } from './mouseover.directive';
import { ClassDirective } from './class.directive';
import { FlipDirective } from './flip.directive';
import { IfDirective } from './if.directive';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';




const approute: Routes=[
  {path:'',component:HeaderComponent},
  {path:'Home',component:HeaderComponent},
  {path:'Products',component:ProductsComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:FormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContainerComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    AboutComponent,
    BackgroundDirective,
    MouseoverDirective,
    ClassDirective,
    FlipDirective,
    IfDirective,
    FormComponent,
   
   
  
    ],
  
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(approute),
       
    
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


