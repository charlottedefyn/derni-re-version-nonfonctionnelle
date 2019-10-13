import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { ArticlesOnlineService } from '../services/articles-online.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles;

  constructor(
               private service: ArticlesOnlineService,

               private router: Router) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      (result) => {
        console.log(result)
        this.articles = result;

      }
    );

  }

  onClickDelete(article)
  {
    this.service.delete(article.id).subscribe(
      (result) => {
        const index = this.articles.indexOf(article);
        this.articles.splice(index, 1);
      }
    );
  }

  onClickUpdate(article) {
    console.log(article)
    this.router.navigate(['/article/update', article.id]);
  }

  onClickHome() {
    this.router.navigate(['/']);
  }

  onClickBackend() {
    this.router.navigate(['/accueil-backend']);
  }
}
