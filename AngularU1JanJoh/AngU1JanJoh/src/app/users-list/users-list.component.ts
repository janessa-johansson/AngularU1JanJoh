import { Component, OnInit } from '@angular/core';
// import { user } from '../dashboard/dashboard.component';
// import { userList } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleColors() {
    console.log("You toggled!")
  }

}

