import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  top250Subjects: Movie[];

  @Input() url: string;

  dialogVisible = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.jsonp(this.url, 'callback')
    //   .subscribe(res => {
    //     this.top250Subjects = res['subjects'] as Movie[];
    //     console.log(this.top250Subjects[0]);
    //   });
    this.http.get(this.url)
      .subscribe(res => {
        this.top250Subjects = res['subjects'] as Movie[];
        console.log(this.top250Subjects[0]);
      });
  }

  jsonpCallback(data) {

  }
  // in_theaters
  // coming_soon

  // requestJsonp(url, options, callback = 'callback') {
  //   // options.params is an HttpParams object
  //   const params = options.params.toString();
  //   return this.http.jsonp(`${url}?${params}`, callback)
  //     .map((response: Response) => response[1])
  //     .map((results: any[]) => results.map((result: string) => result[0]));
  // }


}
