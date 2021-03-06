import { Injectable, Optional } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



const apikey = environment.apikey;
const apiURL = environment.apiUrl;
const house =  apikey + '&house=';

@Injectable({
  providedIn: 'root'
})
export class HowardsService {

  constructor( private http: HttpClient) { }

  /* Build  basic structure  URL for endpoints */
  private  runQuery( query: string, optional?): Observable<any>
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
  getMembersbyHouse(nameHouse: string): Observable<any>{
    return this.http.get(`${apiURL}characters/?key=${house}${nameHouse}`);
  }

  /* Given all characters*/
  getMembers(): Observable<any>{
    return this.runQuery(`characters/`);
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
