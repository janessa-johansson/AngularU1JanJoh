import { Component, OnInit } from '@angular/core';
// import { user } from '../dashboard/dashboard.component';
import { USERLIST } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("From users-list-ITEM: " + USERLIST);
  }

  userList = USERLIST;

}
