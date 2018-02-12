import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ElModule } from 'element-angular';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Movie } from './movie';
import { Top250Component } from './top250/top250.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

// import './top250.json';
// import './coming-soon.json';
// import './in-theaters.json';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieListComponent,
    Top250Component,
    InTheatersComponent,
    ComingSoonComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
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
        path: 'detail/:id',
        component: MovieDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
