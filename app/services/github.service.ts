import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class GithubService{
    private username='AzharCSEdeveloper ';
    private client_id='d140f48e4fce0e7d9610';
    private client_secret='049c4d302f5f47981d4ccf8deedff433bd57a1bb';

    constructor(private _http:Http){
    console.log('Github Service Init...');

    }
    getUser(){
      return  this._http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());


    }
    getRepos(){
        return  this._http.get('https://api.github.com/users/'+this.username+'/repos')
          .map(res => res.json());
  
  
      }
      updateUsername(username:string){
          this.username = username;

      }

}