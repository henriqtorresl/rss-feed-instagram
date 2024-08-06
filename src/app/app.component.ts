import { Component, OnInit } from '@angular/core';
import { InstagramService } from './service/instagram.service';
import { Post } from './interfaces/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  posts: Post[] = [];

  constructor(
    private instagramService: InstagramService
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.refreshToken();
  }

  getPosts(): void {
    this.instagramService.getPosts().subscribe(response => {
      this.posts = response
    });
  }

  refreshToken(): void {
    this.instagramService.refreshToken().subscribe(() => {
      console.log('Token renovado!');
    });
  }

}