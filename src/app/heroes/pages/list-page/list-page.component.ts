import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  //variable para almacenar el listado de héroes

  //inyectar el servicio

  @Input()
  public listaHeroes:Hero[]=[]
  constructor(private heroService:HeroService){}


  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      hero =>{
        this.listaHeroes=hero
      }
    )
  }
}
