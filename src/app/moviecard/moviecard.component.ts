import {Component, Input, OnInit} from '@angular/core';
import { getFromAPI, getJSONFromAPI } from '../../assets/helper-code/get-data-from-api';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  faves = window.localStorage;
  btnStatus = 'warn';
  clicked = false;
  btnIcon = 'favorite';
  @Input() movieData: object;

  constructor() {
    /*if (this.faves.hasOwnProperty(this.movieData['Title'])) {
      this.clicked = true;
      this.btnStatus = 'primary';
      this.btnIcon = 'delete';
    }*/
  }

  ngOnInit(): void {
    if (this.faves.hasOwnProperty(this.movieData['Title'])) {
      this.clicked = true;
      this.btnStatus = 'primary';
      this.btnIcon = 'delete';
    }
  }

  onFavorite() {
    if (this.faves.hasOwnProperty(this.movieData['Title'])) {
      this.btnStatus = 'warn';
      this.btnIcon = 'favorite';
      this.faves.removeItem(this.movieData['Title']);
    } else {
      this.btnStatus = 'primary';
      this.btnIcon = 'delete';
      this.faves.setItem(this.movieData['Title'], this.movieData['Poster']);
    }

    this.clicked = !this.clicked;
  }

}
