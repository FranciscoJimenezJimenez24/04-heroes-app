import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environments } from 'environments/environments';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl= environments.baseUrl;
  private user?:User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined{
    if (!this.user) return undefined;

    //devuelve una copia
    return structuredClone(this.user)
  }

  login(email:string,password:string):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token',"sdfgkpasedjrgGDFsdfgdsfg.sfgqeawrgtQAFdfgh"))
      )
  }

  logout(){
    this.user=undefined;
    localStorage.clear();
  }

  checkAuthentication():Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false); //no necesitamos operacion asincrona

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user=>this.user=user),//tap: efecto secundario para almacenar el usuario
        map(user=>!!user),//map: transformamos la salida, hacemos doble negación, negamos y negamos
                          //Basicamente devolvemos true si hay un usuario
                          //Es lo mismo que poner map ( user => user? true : false)
        catchError(err=>of(false))//y si el backend devuelve error, es false
      )
  }



}
