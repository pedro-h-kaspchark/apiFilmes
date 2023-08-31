import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum TipoDeBusca{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private url = 'http://www.omdbapi.com/';
  private apiKey = 'a7490c1'
  
  constructor(private http: HttpClient){ }

  buscarFilmes(titulo: string, type: TipoDeBusca): Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apikey=${this.apiKey}`);
  }

  pegarDetalhes(id: string){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
