
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const approute: Routes=[
  
  {path:'Products',component:ProductsComponent},
  {path:'Productdetails/:id',component:ProductdetailsComponent},
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
    ProductdetailsComponent,

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(approute)
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


