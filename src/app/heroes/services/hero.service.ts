import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
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

}
