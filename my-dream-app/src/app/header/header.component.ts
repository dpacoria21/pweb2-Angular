import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bandera : boolean = true;
  constructor() { }

  showInicio(){
    this.bandera = true;
    return this.bandera;
  }
  modInicio(){
    if(this.bandera==true){
      this.bandera = false;
    }
  }
  ngOnInit(): void {
  }

}
