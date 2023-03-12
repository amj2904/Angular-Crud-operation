import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-admin-user-sign-up',
  templateUrl: './admin-user-sign-up.component.html',
  styleUrls: ['./admin-user-sign-up.component.css']
})
export class AdminUserSignUpComponent implements OnInit {
  allRestaurentData!:any
  totalLength: any; //page
  page: number = 1;//page
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getSignUp().subscribe(res => {
      this.allRestaurentData = res;

  })
}

}
