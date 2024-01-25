import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]
<<<<<<< HEAD

  public heroForm=new FormGroup({
    id: new FormControl<string>('',{nonNullable:true}),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  })

  onSubmit():void{
    console.log({
      formIsValid:this.heroForm.valid,
      value:this.heroForm.value
    })
  }
=======
>>>>>>> 5688f81c1f32f168e054e584c6effdf73202e0c0
}
