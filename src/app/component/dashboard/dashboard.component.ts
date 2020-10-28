import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  	itemList:[];
	filterData:[];
 	itemListData:[];
	 @ViewChild('htmlData') htmlData:ElementRef;
 	constructor(private itemservice:ItemService,private toastr: ToastrService) { }
 	// Call item list function on page load 
 	ngOnInit() {
 		this.getitemList();
 	}

 	// Get item list from services
 	getitemList(){
 		let itemList = this.itemservice.getAllItems();
 		this.success(itemList)
 	}

 	// Get item list success
 	success(data){
 		this.itemListData = data.data;
 	}

 	// Delete a item with its index
 	deleteItem(index:number){
     // get confirm box for confirmation
 		let r = confirm("Are you sure? You want to delete!!!");
 		if (r == true) {
 			let itemDelete = this.itemservice.deleteitem(index);
 			if(itemDelete) {
 				this.toastr.success("Success", "item Deleted");
 			} 
 			this.getitemList();
 		}
 	}

}
