import { Component, OnInit } from '@angular/core';
import {objectKeys} from 'codelyzer/util/objectKeys';
import {getJSONFromAPI} from '../../assets/helper-code/get-data-from-api';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.scss']
})
export class FavlistComponent implements OnInit {

  faves = window.localStorage;
  keys = objectKeys(this.faves);
  displayData = false;
  movieObj = getJSONFromAPI('http://www.omdbapi.com/?apikey=7c2ccad9&t=Z&plot=full');

  onGoBack() {
    this.displayData = false;
  }

  onGoToMovie(key: string) {
    this.movieObj = getJSONFromAPI('http://www.omdbapi.com/?apikey=7c2ccad9&t=' + key + '&plot=full');
    this.displayData = true;
  }

  constructor() { }

  onDelete(key: string) {
    this.faves.removeItem(key);
  }

  ngOnInit(): void {
  }

}
