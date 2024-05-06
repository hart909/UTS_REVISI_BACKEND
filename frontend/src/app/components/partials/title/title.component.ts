import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
@Input()
title!:string;
@Input()
margin?='4rem 0 1rem 2.2rem';
@Input()
fontSize? = '1.7rem'
}
