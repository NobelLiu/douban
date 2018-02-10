import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ElModule } from 'element-angular';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { Movie } from './movie';
import { Top250Component } from './top250/top250.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieListComponent,
    MovieComponent,
    Top250Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: Top250Component
      },
      {
        path: 'movie',
        component: Movie
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
