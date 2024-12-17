import { Component, computed, EventEmitter, output } from '@angular/core';
import { Input,input,Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
// import { DUMMY_USERS } from '../dummy-users';
// import { signal } from '@angular/core';

// let randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

// type User={id:string,name:string,avatar:string}
interface User {id:string,name:string,avatar:string}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) selected!:boolean;
@Input({required:true}) user!:User;


@Output() selectedUser=new EventEmitter<string>();
// selectedUser=output<string>()


get imagePath(){
  return 'assets/users/'+this.user.avatar
}

//name=input.required<string>()
//path=input.required<string>()
//imagePath=computed(()=>'assets/users/'+this.path)

  // users=signal(DUMMY_USERS[randomIndex])
  // imagePath=computed(()=>'assets/users/'+this.users().avatar)
  // users=DUMMY_USERS[randomIndex];

  // get imagePath(){
  //   return 'assets/users/'+this.users.avatar
  // }

  onSelectedUser(){

    // let randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    // this.users.set(DUMMY_USERS[randomIndex])
    // this.users=DUMMY_USERS[randomIndex]
    this.selectedUser.emit(this.user.id)
  
  }

}
