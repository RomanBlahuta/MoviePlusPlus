import { Component, OnInit } from '@angular/core';
import {objectKeys} from 'codelyzer/util/objectKeys';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.scss']
})
export class FavlistComponent implements OnInit {

  faves = window.localStorage;
  keys = objectKeys(this.faves);

  constructor() { }

  onDelete(key: string) {
    this.faves.removeItem(key);
  }

  ngOnInit(): void {
  }

}
