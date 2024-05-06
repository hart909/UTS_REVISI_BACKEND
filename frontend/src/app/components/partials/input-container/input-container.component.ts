import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent implements OnInit {

  @Input()
  label!:string;

  @Input()
  bgColor = 'black';
  
  ngOnInit(): void {
    
  }

}
