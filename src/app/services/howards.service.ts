import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



const apikey = environment.apikey;
const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HowardsService {

  constructor( private http: HttpClient) { }

  /* Build  basic structure  URL for endpoints */
  private  runQuery( query: string): Observable<any>
  {
    query = apiURL + query + '?key=' + apikey;

    return this.http.get(query);
  }

  /* Given all House of Howards */
  getAllHouses(): Observable<any>{
    return this.runQuery(`houses/`);
  }

  /* Given especific House of Howards */
  getHousebyId( id: string): Observable<any>{
  return this.runQuery(`houses/${id}`);
  }


  /* Given all members of a Howards' House*/
  getMembers(nameHouse: string): Observable<any>{
    return this.runQuery(`characters.&house=${nameHouse}` );
  }

  /* Given details of a member*/
  getMembersId(id: string): Observable<any>{
    return this.runQuery(`characters/${id}`);
  }

  /* Given all Spell from the magic World*/
  getSpells(): Observable<any>{
    return this.runQuery(`spells`);
  }
}
