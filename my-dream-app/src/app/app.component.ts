import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan', 'joe', 'cameron', 'john'];
  activated = false;
  title = 'my-dream-app';
  name : string;
  email : string; 
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor(){
    console.log("Constructor working...");
    this.name = "Diego Ivan Pacori Anccasi";
    this.email = "dpacoria@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["futbol", "Programacion","Counter Strike"];
    this.showHobbies = false;
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: { value: string; }) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  sayHello(){
    alert("Hola desde app.component");
  }

  deleteUser(user: string){
    for(let i=0; i<this.users.length; i++){
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser: { value: string; focus: () => void; }){
    this.users.push(newUser.value);
    newUser.value = 'Escribe un usuario';
    newUser.focus();
    return false;
  }

}

