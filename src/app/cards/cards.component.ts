import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  posts: any[];

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => {
        console.log(posts);
        this.posts = posts.projects;
      });
  }

}
