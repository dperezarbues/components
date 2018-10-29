import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperHero } from './superhero';


@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero:SuperHero;
  @Output() call = new EventEmitter<SuperHero>();

  callHero = () => this.call.emit(this.hero);
}
