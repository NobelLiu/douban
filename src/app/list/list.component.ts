import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  top250Subjects: Movie[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.jsonp('https://api.douban.com/v2/movie/top250', 'callback')
      .subscribe(res => {
        this.top250Subjects = res['subjects'] as Movie[];
        console.log(this.top250Subjects[0]);
      });
  }

  jsonpCallback(data) {

  }


  // requestJsonp(url, options, callback = 'callback') {
  //   // options.params is an HttpParams object
  //   const params = options.params.toString();
  //   return this.http.jsonp(`${url}?${params}`, callback)
  //     .map((response: Response) => response[1])
  //     .map((results: any[]) => results.map((result: string) => result[0]));
  // }

}
