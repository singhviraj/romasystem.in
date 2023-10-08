
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
    IfDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
