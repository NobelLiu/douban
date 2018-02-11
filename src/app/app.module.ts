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
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieListComponent,
    MovieComponent,
    Top250Component,
    InTheatersComponent,
    ComingSoonComponent
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
        component: InTheatersComponent
      },
      {
        path: 'in_theaters',
        component: InTheatersComponent
      },
      {
        path: 'coming_soon',
        component: ComingSoonComponent
      },
      {
        path: 'top250',
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
