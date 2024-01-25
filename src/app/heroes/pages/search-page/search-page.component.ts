import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes:Hero[]=[];
  public selectedHero?:Hero;

  constructor(private heroesService: HeroService){}

  public searchHero(){
<<<<<<< HEAD


=======
>>>>>>> 5688f81c1f32f168e054e584c6effdf73202e0c0
    const value:string =this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe(
      heroes => this.heroes = heroes
    )
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent){
    if (!event.option.value){
      this.selectedHero=undefined;
      return;
    }

    const hero: Hero=event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero=hero;
  }

}
