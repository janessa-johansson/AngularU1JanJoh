import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(user);
    console.log(USERLIST); 
  }

}

export class user {
  userName: string;
  textColor: string;
}

export const USERLIST: user[] = [
  { userName: 'Mr. Nice', textColor: 'green' },
  { userName: 'Narco', textColor: 'green' },
  { userName: 'Bomvasto', textColor:'"green' },
  { userName: 'Celeritas ', textColor: 'green' },
  { userName: 'Magenta', textColor: 'green' },
  { userName: 'RubberMan', textColor: 'green' },
  { userName: 'Dynama', textColor: 'green' },
  { userName: 'Dr IQ', textColor: 'green' },
  { userName: 'Magma', textColor: 'green' },
  { userName: 'Tornado', textColor: 'green' }

];
