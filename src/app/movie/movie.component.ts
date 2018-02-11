import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() id: number;
  movie: Movie;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.jsonp('https://api.douban.com/v2/movie/subject/' + this.id, 'callback')
      .subscribe(res => {
        this.movie = res['subjects'] as Movie;
      });
  }

}
