import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, catchError, map, of } from 'rxjs';
=======
import { Observable, catchError, of } from 'rxjs';
>>>>>>> 5688f81c1f32f168e054e584c6effdf73202e0c0
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'environments/environments';

@Injectable({providedIn: 'root'})
export class HeroService {

  private baseUrl:string=environments.baseUrl
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    //URL
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id:string):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError(error => of(undefined)));
  }

  getSuggestions(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

<<<<<<< HEAD
  addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`,hero)
  }

  updateHero(hero:Hero):Observable<Hero>{
    if (!hero.id) throw Error('Hero id is required');

    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero)

  }
  deleteHero(id: string):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(_err=>of(false)),
        map(response => true)
      )


  }

=======
>>>>>>> 5688f81c1f32f168e054e584c6effdf73202e0c0
}
