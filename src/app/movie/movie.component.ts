import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../movie';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() id: number;
  movie: Movie;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.get('id'))
      .subscribe(movieId => this.getMovieDetial(movieId));
  }

  getMovieDetial(movieId: string) {
    this.id = +movieId;
    this.http.jsonp('https://api.douban.com/v2/movie/subject/' + movieId, 'callback')
      .subscribe(res => {
        this.movie = res['subjects'] as Movie;
      });
  }

}
