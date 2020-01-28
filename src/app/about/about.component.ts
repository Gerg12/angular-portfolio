import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  basics: any;

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(basics => this.basics = basics.basics);
  }

}
