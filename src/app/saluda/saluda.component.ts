import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saluda',
  template: `Saludos a {{name}}
            <button (click) = confirmRead()>RECIBIDO</button>`,
  styleUrls: ['./saluda.component.css']
})
export class SaludaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name:string;
  @Output() readed = new EventEmitter<String>();

  confirmRead = ()=> this.readed.emit("RECIBIDO");
}
