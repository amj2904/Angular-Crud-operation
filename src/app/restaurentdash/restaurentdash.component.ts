import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Restaurent } from '../restaurent';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-restaurentdash',
  templateUrl: './restaurentdash.component.html',
  styleUrls: ['./restaurentdash.component.css']
})
export class RestaurentdashComponent implements OnInit {
  restaurentModelObj: Restaurent = new Restaurent;
  formValue!: FormGroup;
  allRestaurentData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }
  totalLength: any; //page
  page: number = 1;//page
  restaurent:Restaurent[]=[];
  nameSearch: any;//for searching 


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      mobile: ['',Validators.required],
      address: ['',Validators.required],
      services: ['',Validators.required],
    })
    this.getAllData();
  }
  clickAddRestaurent() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  addRestaurent() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      console.log("DataSaved Succesfully")
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();

    },
      err => {
        alert("something went wrong")
      })

  }
  getAllData() {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;

      this.totalLength = res.length;//page
      this.restaurent=res;//for searching
     
    })
  }

  deleteRestaurent(data: any) {
    this.api.deleteRestaurent(data.id).subscribe(res => {
      alert("Restaurent Record Deleted");
      this.getAllData();
    })
  }
  onEditRestaurent(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

  }
  updateRestaurent() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    this.api.updateRestaurent(this.restaurentModelObj, this.restaurentModelObj.id).subscribe(res => {
      alert("Restaurent Record Updated!");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();

    })
  }
  search(){
    if (this.nameSearch=="") {
      /* this.ngOnInit(); */
    }
    else {
      this.restaurent = this.restaurent.filter(res=> {
        return this.nameSearch.toLocaleLowerCase().match(this.nameSearch.toLocaleLowerCase());
      })
    }
  }
  key:string='id';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse= !this.reverse;
  }
}
