import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  url = 'https://api.douban.com/v2/movie/coming_soon';
  // url = './coming_soon.json';

  constructor() { }

  ngOnInit() {
  }

}
