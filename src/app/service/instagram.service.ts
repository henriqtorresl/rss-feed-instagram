import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Post } from '../interfaces/Post';
import { InstagramPostsResponse } from '../interfaces/InstagramPostsResponse';
import { InstagramRefreshResponse } from '../interfaces/InstagramRefreshResponse';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private readonly token: string = 'AquiVocêAdicionaOToken';
  private readonly apiInstagram: string = `https://graph.instagram.com`;

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<InstagramPostsResponse>(`${this.apiInstagram}/me/media?access_token=${this.token}&fields=media_url,media_type,caption,permalink`)
    .pipe(
      take(1),
      map((response: InstagramPostsResponse) => response.data)
    );
  }

  refreshToken(): Observable<InstagramRefreshResponse> {
    return this.httpClient.get<InstagramRefreshResponse>(`${this.apiInstagram}/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.token}`)
    .pipe(
      take(1)
    );
  }

}
