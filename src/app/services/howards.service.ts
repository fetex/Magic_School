import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { House } from '../Interfaces/interface';


const apikey = environment.apikey;
const apiURL = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-Key': apikey
});

@Injectable({
  providedIn: 'root'
})
export class HowardsService {

  constructor( private http: HttpClient) { }

  // private  runQuery<T>( query: string){
  //   query = apiURL + query;

  //   return this.http.get<T>(query, {headers});
  // }

  getAllHouses(){
    return this.http.get<House>(`https://www.potterapi.com/v1/houses/?key=%242a%2410%24UTNkkNxZ95c7eTDlkhCYu.0Fuz4ND7OJxRxAx9r5M%2F9ymoOxqc7k.`);

  }
}
