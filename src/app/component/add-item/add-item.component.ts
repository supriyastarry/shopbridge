import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from 'src/app/service/config.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})

export class AddItemComponent implements OnInit {

  itemAddForm : FormGroup;
  index:any;

  constructor(private formBuilder: FormBuilder,
              private router: Router, 
              private route: ActivatedRoute, 
              private itemService:ItemService,
              private toastr: ToastrService) { 

    // Check for route params
    this.route.params.subscribe(params => {
      this.index = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.index && this.index != null && this.index != undefined) {
        this.getitemDetails(this.index);
      }else{
        this.createForm(null);
      }
    });
  }

  ngOnInit() {
  }

  // Submit item details form
  addItem(){
    if (this.index && this.index != null && this.index != undefined) {
      this.itemAddForm.value.id = this.index
    }else{
      this.index = null;
    }
    let itemRegister = this.itemService.addItem(this.itemAddForm.value, this.index);
    if(itemRegister) {
      if (itemRegister.code == 200) {
        this.toastr.success(itemRegister.message,"Success");
        this.router.navigate(['/']);
      }else{
        this.toastr.error(itemRegister.message,"Failed");
      }
    }
  }

  // If this is update form, get user details and update form
  getitemDetails(index:number){
    let itemDetail = this.itemService.getitemDetails(index);
    this.createForm(itemDetail);
  }


  // If this is update request then auto fill form
  createForm(data){
    if (data == null) {
      this.itemAddForm = this.formBuilder.group({
        name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        description: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
       price: ['', [Validators.required]]

      });			
    }else{
      this.itemAddForm = this.formBuilder.group({
        name: [data.itemData.name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        description: [data.itemData.description,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
       price: [data.itemData.price]
      });
    }
  }

}


