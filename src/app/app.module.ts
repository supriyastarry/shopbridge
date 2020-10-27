import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { homeChildRoutes, HomeComponent } from './component/home/home.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { ItemService } from './service/item.service';

import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ConfigService } from './service/config.service';
import { EditItemComponent } from './component/edit-item/edit-item.component';
const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children :homeChildRoutes,
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
    ],
    providers: [ItemService, ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule { }
