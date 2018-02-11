import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {

  url = 'http://api.douban.com/v2/movie/in_theaters';

  constructor() { }

  ngOnInit() {
  }

}