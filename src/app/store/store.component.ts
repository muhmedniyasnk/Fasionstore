import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  store= [
    {'id':1,'name':'top-wear','description':'shirts for men,women,boys and girls,tops for women and girls','image':'../../assets/top-ware.jpg'},
    {'id':2,'name':'bottum-ware','description':'pants for men,women,boys and girls,frocks for women and girls','image':'../../assets/bottum-ware.jpg'},
    {'id':3,'name':'inner-ware','description':'innerware for men,women,boys and girls','image':'../../assets/inner-ware.jpg'},
    {'id':4,'name':'shoes','description':'shoes for men,women,boys and girls','image':'../../assets/shoes.jpg'},

  ]

}
