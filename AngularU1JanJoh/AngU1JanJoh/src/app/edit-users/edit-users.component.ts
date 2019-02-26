import { Component, OnInit } from '@angular/core';
import { USERLIST } from '../dashboard/dashboard.component';
import { user } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeUser() {
    console.log("You removed a user!")
    console.log("This is a user: " +user)
    console.log("This is a userlist: " +USERLIST)
  }

  addUser() {
    console.log("You added a user!") 
  }

}
