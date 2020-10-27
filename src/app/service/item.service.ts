import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getAllItems(){
    let itemList:any;
    if(localStorage.getItem('items') && localStorage.getItem('items') != '') {
      itemList = {
        code : 200,
        message : "items List Fetched Successfully",
        data : JSON.parse(localStorage.getItem('items'))
      }
    }else{
      itemList = {
        code : 200,
        message : "items List Fetched Successfully",
        data : JSON.parse(localStorage.getItem('items'))
      }
    }
    return itemList;
  }

  addItem(data, index){
    let itemList = JSON.parse(localStorage.getItem('items'));
    let returnData;
      try {
          if(index != null) {
            itemList[index] = data;
            localStorage.removeItem('items');
            localStorage.setItem('items', JSON.stringify(itemList));
            returnData = {
              code : 200,
              message : "Item Updated!!!",
              data : JSON.parse(localStorage.getItem('items'))
            }    
          }else{      
            data.id = this.generateRandomID();
          itemList.unshift(data);
          localStorage.removeItem('items');
          localStorage.setItem('items', JSON.stringify(itemList));

            returnData = {
              code : 200,
              message : "Item Added!!!",
              data : JSON.parse(localStorage.getItem('items'))
            } } 
          } catch (e) {
        console.log("Storage failed: " + e);
      }
    return returnData;
  }

  deleteitem(index:number){
    let itemList = JSON.parse(localStorage.getItem('items'));

    itemList.splice(index, 1);

    localStorage.setItem('items',JSON.stringify(itemList));

    let returnData = {
      code : 200,
      message : "Item Deleted!!!",
      data : JSON.parse(localStorage.getItem('items'))
    }

    return returnData;
  }

  getitemDetails(index:number){
    let itemList = JSON.parse(localStorage.getItem('items'));

    let returnData = {
      code : 200,
      message : "item Details Fetched",
      itemData : itemList[index]
    }

    return returnData;
  }

  generateRandomID() {
    var x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }

}

