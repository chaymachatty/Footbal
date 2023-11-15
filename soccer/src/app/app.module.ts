import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsComponent } from './components/news/news.component';
import { Container1Component } from './components/container1/container1.component';
import { Container2Component } from './components/container2/container2.component';
import { Container3Component } from './components/container3/container3.component';
import { Container4Component } from './components/container4/container4.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { RowColorDirective } from './directives/row-color.directive';

import { ReversePipe } from './pipes/reverse.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AuthServiceComponent } from './components/auth-service/auth-service.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    NewsComponent,
    Container1Component,
    Container2Component,
    Container3Component,
    Container4Component,
    ContactComponent,
    AddMatchComponent,
    SignInComponent,
    SignUpComponent,
    AdminComponent,
    AddPlayersComponent,
    MatchesComponent,
    MatchComponent,
    RowColorDirective,
    ReversePipe,
    MyFilterPipe,
    AddTeamComponent,
    TeamsComponent,
    PlayersComponent,
    PlayerComponent,
    TeamComponent,
    AddUserComponent,
    UserComponent,
    UsersComponent,
    AuthServiceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
