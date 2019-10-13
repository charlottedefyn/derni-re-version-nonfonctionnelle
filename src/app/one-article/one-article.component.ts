import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../services/articles-online.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {

  article;

  constructor(
    private service : ArticlesOnlineService,
    private route : ActivatedRoute,
    private router : Router ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {

      const id = params.get("id");

      this.service.getOne(id).subscribe(
        (result) => {

          this.article = result;
          console.log(result);
        },(error) => {
          this.router.navigate(['/not-found']);
        })
    });
  }

}
