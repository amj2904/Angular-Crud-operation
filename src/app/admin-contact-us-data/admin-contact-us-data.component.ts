import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-admin-contact-us-data',
  templateUrl: './admin-contact-us-data.component.html',
  styleUrls: ['./admin-contact-us-data.component.css']
})
export class AdminContactUsDataComponent implements OnInit {
  allRestaurentData!:any;
  totalLength: any; //page
  page: number = 1;//page
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getcontactus().subscribe(res => {
      this.allRestaurentData = res;

  })

}

}
