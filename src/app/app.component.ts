import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from './module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  searchText: string;
  // modules = [
  //   { 'name': '正在热映', 'link': '/in_theaters', 'url': 'https://api.douban.com/v2/movie/in_theaters' },
  //   { 'name': '即将上映', 'link': '/coming_soon', 'url': 'https://api.douban.com/v2/movie/coming_soon' },
  //   { 'name': 'Top 250', 'link': '/top250', 'url': 'https://api.douban.com/v2/movie/top250' }
  // ];
  modules: Module[] = [
    { 'title': '正在热映', 'path': '/in_theaters', 'url': './assets/in_theaters.json' },
    { 'title': '即将上映', 'path': '/coming_soon', 'url': './assets/coming_soon.json' },
    { 'title': 'Top 250', 'path': '/top250', 'url': './assets/top250.json' }
  ];
  selectedModule: Module;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.selectedModule === undefined) {
      this.goToModule(this.modules[0]);
    }
  }

  goToModule(module) {
    this.selectedModule = module;
    this.router.navigate([module.path]);
  }
}
// https://api.douban.com/v2/movie/search?q=%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E
