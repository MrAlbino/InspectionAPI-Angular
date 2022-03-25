import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PenaltyApiService {

  readonly penaltyAPIUrl="https://localhost:7000/api";

  constructor(private http:HttpClient) { }

  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.penaltyAPIUrl+'/Countries');
  }
  getResult(id:number|string,checkOutDate:Date,returnDate:Date):Observable<any>{
    let params = new HttpParams();
    params=params.append("id",id);
    params=params.append("checkOutDate",String(checkOutDate));
    params=params.append("returnDate",String(returnDate));

    return this.http.get<any>(this.penaltyAPIUrl+`/PenaltyCalculation/`,{observe:"response",params});
  }
}
