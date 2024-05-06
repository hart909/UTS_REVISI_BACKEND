import { Component } from '@angular/core';
import { FilmService } from '../../../services/film.service';
import { Tag } from '../../../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?:Tag[];
  constructor(filmService:FilmService) {
    filmService.getAllTags().subscribe(serverTags =>{
      this.tags = serverTags;
    });
  }
}
