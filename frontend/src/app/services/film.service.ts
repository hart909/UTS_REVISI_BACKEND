import { Injectable } from '@angular/core';
import { Film } from '../shared/models/Film'
import { sample_film, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FILMS_BY_ID_URL, FILMS_BY_SEARCH_URL, FILMS_BY_TAG_URL, FILMS_TAGS_URL, FILMS_URL } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Film[]>{
    return this.http.get<Film[]>(FILMS_URL)
  }
  getAllFilmsBySearchTerm(searchTerm:string){
    return this.http.get<Film[]>(FILMS_BY_SEARCH_URL+ searchTerm);
  }
  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FILMS_TAGS_URL);
  }
  getAllFilmsByTag(tag:string):Observable<Film[]>{
  return tag === "All"?
  this.getAll():
  this.http.get<Film[]>(FILMS_BY_TAG_URL + tag);}
  getFilmById(filmId:string):Observable<Film>{
    return this.http.get<Film>(FILMS_BY_ID_URL +filmId);

  }
  }

