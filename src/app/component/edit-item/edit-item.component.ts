import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from 'src/app/service/config.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class EditItemComponent implements OnInit {

  index:any;
  itemDetail:any;
  constructor(private router: Router, private route: ActivatedRoute, private itemService:ItemService,private toastr: ToastrService) { 
    // Get user detail index number sent in params
    this.route.params.subscribe(params => {
      this.index = params['id'];
      if (this.index && this.index != null && this.index != undefined) {
        this.getitemDetails(this.index);
      }
    });
  }

  ngOnInit() {
  }
  

  // Get item details 
  getitemDetails(index:number){
    let getitemDetail = this.itemService.getitemDetails(index);
    if(getitemDetail) {
      this.itemDetail = getitemDetail.itemData;
      this.toastr.success(getitemDetail.message,"Success");
    }
  }

}
