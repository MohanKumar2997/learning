import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { followers } from './followers/model/followerJSON';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private url:string="https://api.github.com/users/mosh-hamedani/followers"

  constructor(private http:HttpClient) { }

  getAllFollowers():Observable<followers[]>{
    return this.http.get<followers[]>(this.url)
  }
}
