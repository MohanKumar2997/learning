import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { followers } from './followers/model/followerJSON';
import { FollowersComponent } from './followers/followers.component';

const routes: Routes = [
  { component:FollowersComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
