import { Component } from '@angular/core';
import { FollowersService } from '../followers.service';
import { followers } from './model/followerJSON';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  followers:followers[]=[]

  constructor(private service:FollowersService){

}

  ngOnInit():void{
    this.service.getAllFollowers().subscribe(res=>{
      this.followers=res
    },err=>{
      console.log(err)
    })
  }
}
