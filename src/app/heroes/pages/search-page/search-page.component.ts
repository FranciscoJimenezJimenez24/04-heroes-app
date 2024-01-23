import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');

}
