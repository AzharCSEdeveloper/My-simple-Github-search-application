import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { userInfo } from 'os';


@Component({
  moduleId:module.id,
  selector: 'github',
  providers:[ GithubService],
  templateUrl: `github.component.html`,
  
})
export class GithubComponent { 
    user:any;
   repos:any;
   username:string;

    constructor(private _githubService:GithubService){
        console.log('Github Component Init...');
        }
    search(){
        this._githubService.updateUsername(this.username);

        this._githubService.getUser().subscribe(user => {
            //   console.log(user);
            this.user=user;
           });
           this._githubService.getRepos().subscribe(repos => {
               //   console.log(user);
               this.repos=repos;
              });
      

    }
}