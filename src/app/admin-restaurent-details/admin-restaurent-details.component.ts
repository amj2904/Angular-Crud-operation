import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-admin-restaurent-details',
  templateUrl: './admin-restaurent-details.component.html',
  styleUrls: ['./admin-restaurent-details.component.css']
})
export class AdminRestaurentDetailsComponent implements OnInit {
  allRestaurentData!: any;
  totalLength: any; //page
  page: number = 1;//page
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;

    })
  }
 
}
