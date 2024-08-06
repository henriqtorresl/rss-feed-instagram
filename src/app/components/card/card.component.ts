import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input({ required: true }) post!: Post;

  constructor() {}

  ngOnInit(): void {

  }

}