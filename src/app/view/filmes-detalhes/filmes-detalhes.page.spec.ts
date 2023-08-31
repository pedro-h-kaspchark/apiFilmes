import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FilmesDetalhesPage } from './filmes-detalhes.page';

describe('FilmesDetalhesPage', () => {
  let component: FilmesDetalhesPage;
  let fixture: ComponentFixture<FilmesDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilmesDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
