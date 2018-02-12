import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  searchText: string;
  modules: [
    { 'name': '正在热映', 'link': '/in_theaters', 'url': 'https://api.douban.com/v2/movie/in_theaters' },
    { 'name': '即将上映', 'link': '/coming_soon', 'url': 'https://api.douban.com/v2/movie/coming_soon' },
    { 'name': 'Top 250', 'link': '/top250', 'url': 'https://api.douban.com/v2/movie/top250' }
  ];
  selectedModule: {
    name: string
    url: string
  };

  goToModule(module) {
    this.selectedModule = module;
  }
}
// https://api.douban.com/v2/movie/search?q=%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E
