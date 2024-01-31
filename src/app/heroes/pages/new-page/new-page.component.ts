import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  constructor(private heroesService: HeroService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ){}

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]

  public hero?:Hero;

  public heroForm=new FormGroup({
    id: new FormControl<string>('',{nonNullable:true}),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  })

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit():void{
    if (!this.router.url.includes('edit')) return;
    this.activatedRoute.params
      .pipe(
        //  delay(3000),
        // Desectructuramos params y obtengo el id, para poder pasarlo al servicio
        switchMap(({id})=>this.heroesService.getHeroById(id))
      ).subscribe(hero => {
        if (!hero) return this.heroForm.reset(hero);
        this.hero=hero;
        this.hero.alt_img="http://localhost:4200/assets/heroes/"+hero.id+".jpg"
        console.log(hero);
        return;
        
    })
  }

  onSubmit():void{
   if (this.heroForm.invalid) return;

   //si tenemos un id, queremos actualizar
   if (this.currentHero.id){
    this.heroesService.updateHero(this.currentHero)
      .subscribe(hero=>{
        // TODO: Mostrar snackbar
      });
    return;
   }
   this.heroesService.addHero(this.currentHero)
    .subscribe(hero=>{
      // TODO: Mostrar snackbar y navegar a /heroes/edit/hero.id
    })

  }

}
