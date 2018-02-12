import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../movie';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  id: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => params.get('id'))
    //   .subscribe(movieId => this.getMovieDetial(movieId));
    this.getMovieDetial('26628329');
  }

  getMovieDetial(movieId: string) {
    this.id = movieId;
    this.http.get('./assets/26628329.json')
      .subscribe(res => {
        this.movie = res as Movie;
      });
    // this.http.jsonp('https://api.douban.com/v2/movie/subject/' + movieId, 'callback')
    //   .subscribe(res => {
    //     this.movie = res as Movie;
    //   });
  }

  goBack() {
    this.location.back();
  }
}
