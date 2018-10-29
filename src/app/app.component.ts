import { Component } from '@angular/core';
import { SuperHero } from './superhero/superhero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
  famous = 'famoso';
  mensaje = ''
  herocall = '';
  doSomething = function(evento) {this.mensaje = evento};
  handleCall = function(hero) {
    this.herocall = hero.name;
    alert(this.herocall?`Ya he llamado a ${this.hero}`:`Llamando a ${hero.name}`);
  }

  batman: SuperHero = new SuperHero("Batman","Eddie",["power1","power2","power3"]);
  superman: SuperHero = new SuperHero("Superman","Clark",["power1","power2","power3"]);
  superLopez: SuperHero = new SuperHero("superLopez","Lopez",["power1","power2","power3"]);
  heroes:SuperHero[]=[this.batman, this.superLopez, this.superman];
}
