import { Component } from '@angular/core';
import { SearchUserService, User } from 'github-user-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!: User;
  title = 'githubApiDemo';
  constructor(private userSearch: SearchUserService) { }
  ngOnInit(): void {
    this.userSearch.takeApiData('mugan86').then(
      data => {
        this.user = data;
      }
    );
  }
}
