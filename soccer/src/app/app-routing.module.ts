import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
   {path:"contact",component:ContactComponent},
   {path:"matches",component:MatchesComponent},
   {path:"addmatch",component:AddMatchComponent},
   {path:"addmatch/:id",component:AddMatchComponent},
   {path:"sign-in",component:SignInComponent},
   {path:"sign-up",component:SignUpComponent},
   {path:"admin",component:AdminComponent},
   {path:"addplayers",component:AddPlayersComponent},
   {path:"addplayers/:id",component:AddPlayersComponent},
   {path:"players",component:PlayersComponent},
   {path:"addTeam",component:AddTeamComponent},
   {path:"teams",component:TeamsComponent},
   {path:"addUser",component:AddUserComponent},
   {path:"users",component:UsersComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
