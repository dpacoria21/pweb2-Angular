import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : string[];
  
  constructor() { 
    this.products = ["Gaseosa", "Galleta", "Frutas", "Verduras", "Carnes","Cervezas", "Tortas", "Domingueros", "Zapallos"];
  }

  ngOnInit(): void {
  }

}
