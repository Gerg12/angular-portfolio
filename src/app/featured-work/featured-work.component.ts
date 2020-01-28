import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss']
})
export class FeaturedWorkComponent implements OnInit {

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
