import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {getJSONFromAPI} from '../../assets/helper-code/get-data-from-api';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  searchTitle = '';
  movieObj = null;
  valid = false;
  displayData = false;

  faves = window.localStorage;
  btnStatus = 'warn';
  clicked = false;
  btnIcon = 'favorite';

  onTitleInput() {
    this.movieObj = getJSONFromAPI('http://www.omdbapi.com/?apikey=7c2ccad9&t=' + this.searchTitle + '&plot=full');
    this.valid = (this.movieObj.Response !== 'False');

    if (this.faves.hasOwnProperty(this.movieObj['Title'])) {
      this.clicked = true;
      this.btnStatus = 'primary';
      this.btnIcon = 'delete';
    } else {
      this.btnStatus = 'warn';
      this.clicked = false;
      this.btnIcon = 'favorite';
    }
  }

  onGoToMovie() {
    this.displayData = true;
  }

  onGoBack() {
    this.displayData = false;
  }

  onFavorite() {
    if (this.faves.hasOwnProperty(this.movieObj['Title'])) {
      this.btnStatus = 'warn';
      this.btnIcon = 'favorite';
      this.faves.removeItem(this.movieObj['Title']);
    } else {
      this.btnStatus = 'primary';
      this.btnIcon = 'delete';
      this.faves.setItem(this.movieObj['Title'], this.movieObj['Poster']);
    }

    this.clicked = !this.clicked;
  }

  ngOnInit(): void {
  }

}
