import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit{

  public hero?:Hero;

  constructor(
    private heroesService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){

  }

  ngOnInit():void{
    console.log(this.activatedRoute.params);
    this.activatedRoute.params
      .pipe(
        delay(3000),
        // Desectructuramos params y obtengo el id, para poder pasarlo al servicio
        switchMap(({id})=>this.heroesService.getHeroById(id))
      ).subscribe(hero => {
        if (!hero) return this.router.navigate(['/heroes/list']);

        this.hero=hero;
        console.log(hero);
        return;

    })
  }
  goBack(){
    this.router.navigate(['/heroes/list'])
  }

}
