import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PenaltyApiService } from 'src/app/penalty-api.service';

@Component({
  selector: 'app-penalty-form',
  templateUrl: './penalty-form.component.html',
  styleUrls: ['./penalty-form.component.css']
})
export class PenaltyFormComponent implements OnInit {

  countriesList$!: Observable<any[]>;
  
  checkOutDate!:Date;
  returnDate!:Date;
  countryId!:number;
  searchResult:any;
  searched:boolean=false;

  constructor(private service: PenaltyApiService) { }

  ngOnInit(): void {
    this.countriesList$=this.service.getCountryList();
  }
  calculateRequest(){
    this.service.getResult(this.countryId,this.checkOutDate,this.returnDate).subscribe(res=>{
      this.searchResult=res.body;
    });
    this.searched=true;
  }
}
