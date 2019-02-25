import { Component, OnInit } from '@angular/core';

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
  }

  addUser() {
    console.log("You added a user!")
  }

}
