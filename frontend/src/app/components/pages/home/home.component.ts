import { Component, OnInit } from '@angular/core';
import { Film } from '../../../shared/models/Film';
import { FilmService } from '../../../services/film.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  films:Film[] =[];
  constructor(private filmService:FilmService , activatedRoute:ActivatedRoute) { 
    let filmsObservable:Observable<Film[]>
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      filmsObservable= this.filmService.getAllFilmsBySearchTerm(params.searchTerm);
      else if (params.tag)
      filmsObservable = this.filmService.getAllFilmsByTag(params.tag);
      else
      filmsObservable = filmService.getAll();

      filmsObservable.subscribe((serverFilms) =>{
        this.films = serverFilms;
      })
    })
  }

  ngOnInit(): void {

  }
  
}
