import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesOnlineService } from '../services/articles-online.service';


@Component({
  selector: 'app-accueil-backend',
  templateUrl: './accueil-backend.component.html',
  styleUrls: ['./accueil-backend.component.css']
})
export class AccueilBackendComponent implements OnInit {

  articles;
  constructor(
      private router  : Router,
      private service : ArticlesOnlineService,
        
      
  ) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      (result) => {
        console.log(result)
        this.articles = result;

      }
    );
  }



  

}
