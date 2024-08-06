import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  readonly accessToken: string = process.env.ACCESS_TOKEN;

  constructor() { }
}
