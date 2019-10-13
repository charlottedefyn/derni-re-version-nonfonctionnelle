import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../services/articles-online.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles;


  constructor(
    private service: ArticlesOnlineService,
  ) { }


  ngOnInit() {

    this.service.getAll().subscribe(
      (resultat) => {
        this.articles = resultat;


      }
    );

  }
}
