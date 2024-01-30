import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  constructor(private heroesService: HeroService,
              private router: Router){}

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]

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
    this.heroForm.reset(this.heroForm.value)
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
