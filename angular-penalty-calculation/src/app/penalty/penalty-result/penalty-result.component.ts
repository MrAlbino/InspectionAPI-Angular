import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-penalty-result',
  templateUrl: './penalty-result.component.html',
  styleUrls: ['./penalty-result.component.css']
})
export class PenaltyResultComponent implements OnInit {

  constructor() { }

  @Input() searchResult:any;
  countryName:string="";
  amount:number=0;
  currency:string="";

  ngOnInit(): void {
  }

}
