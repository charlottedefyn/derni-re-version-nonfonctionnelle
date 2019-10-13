import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesLocalService {

  constructor() { }

  getAll() {
    return [
      {id : 1, titre: 'un titre', contenu : 'lorem' , img : 'https://via.placeholder.com/400x200'},
      {id : 2, titre: 'un titre', contenu : 'lorem' , img : 'https://via.placeholder.com/400x200'},
      {id : 3, titre: 'un titre', contenu : 'lorem' , img : 'https://via.placeholder.com/400x200'},
      {id : 4, titre: 'un titre', contenu : 'lorem' , img : 'https://via.placeholder.com/400x200'},
      {id : 5, titre: 'un titre', contenu : 'lorem' , img : 'https://via.placeholder.com/400x200'},
      {id : 6, titre: 'un titre', contenu : 'lorem' , img : 'https://via.placeholder.com/400x200'},
    ];
  }// A REFAIRE POUR ARTICLE 

  get(id) {
    const article = this.getAll().find((article) => {
      if ( article.id == id) {
      return article;
      }
    });
    if (!article) { return {}; }
    return article;
  }

  getFromTo(numPage ?: number, nbArticleParPage ?: number) {
    const vraiNumeroPage: number = numPage || 0 ;
    const vraiNbArticleParPage: number = nbArticleParPage || 2;

    return this.getAll().slice(
      vraiNumeroPage * vraiNbArticleParPage,
      vraiNumeroPage * vraiNbArticleParPage + vraiNbArticleParPage
    );
  }
}
