import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top250',
  templateUrl: './top250.component.html',
  styleUrls: ['./top250.component.css']
})
export class Top250Component implements OnInit {

  url = 'https://api.douban.com/v2/movie/top250';

  constructor() { }

  ngOnInit() {
  }

}
