import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from 'src/app/service/config.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
  active:string;
  constructor(private router: Router,private toastr: ToastrService) {
    // Detect route changes for active sidebar menu
    this.router.events.subscribe((val) => {
      this.routeChanged(val);
    });
  }

  ngOnInit() {
  }

  // Detect route changes for active sidebar menu
  routeChanged(val){
    this.active = val.url;
  }


}

export const homeChildRoutes : Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'add',
    component: AddItemComponent
  },
  {
    path: 'update/:id',
    component: AddItemComponent
  },
  {
    path: 'detail/:id',
    component: EditItemComponent
  }
  ];

 