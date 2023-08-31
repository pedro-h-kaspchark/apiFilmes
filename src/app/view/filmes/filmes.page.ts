import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilmeService, TipoDeBusca } from 'src/app/sevices/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  resultados!: Observable<any>;
  termosBusca: string = '';
  tipo!: TipoDeBusca.all;

  constructor(private filmeServices: FilmeService) { }

  ngOnInit() {
  }

  buscar(){
    console.log(this.termosBusca);
    this.resultados = this.filmeServices.buscarFilmes(this.termosBusca, this.tipo).pipe(map(results => results['Search']))
  }

}
