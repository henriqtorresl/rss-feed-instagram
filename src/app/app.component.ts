import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InstagramService } from './service/instagram.service';
import { Post } from './interfaces/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  posts: Post[] = [];
  @ViewChild('feed') feed!: ElementRef;

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

  moveLeft(): void {
    console.log(this.feed.nativeElement.offsetWidth);
    this.feed.nativeElement.scrollLeft -= this.feed.nativeElement.offsetWidth;
  }

  moveRight(): void {
    this.feed.nativeElement.scrollLeft += this.feed.nativeElement.offsetWidth;
  }

}