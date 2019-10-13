import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../services/articles-online.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  isOk = false

  constructor
  (
    private service : ArticlesOnlineService
  ) { }

  ngOnInit() {
  }

  onSubmitNewArticle($event, f)
  {
    $event.preventDefault();
    if(f.valid)
    {
      const article = (f.value);
      this.service.getPosts(article).subscribe(
        (result) => {
        console.log(result);
        this.isOk = true;
      })
    }
  }
}
