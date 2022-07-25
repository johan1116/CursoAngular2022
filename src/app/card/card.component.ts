import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://i0.wp.com/www3.gobiernodecanarias.org/medusa/ecoblog/crodalf/files/2022/03/montana-1.jpg?resize=621%2C414&ssl=1"
  public Titulo:string="Curso de Angular con Interpolarización"
  constructor() { }

  ngOnInit(): void {
  }

}
