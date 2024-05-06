import { Component } from '@angular/core';
import { Film } from '../../../shared/models/Film';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../../services/film.service';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent {
film!: Film;
constructor(activatedRoute:ActivatedRoute, filmService:FilmService,
  private cartService:CartService, private router: Router){
  activatedRoute.params.subscribe((params) =>{
    if(params.id)
      filmService.getFilmById(params.id).subscribe(serverFilm =>{
        this.film = serverFilm;
      });
  })
}
addToCart(){
  this.cartService.addToCart(this.film);
  this.router.navigateByUrl('/cart-page')
}

}

