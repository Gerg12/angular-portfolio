import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {
  basics: any[];

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(basics => this.basics = basics.basics);
  }

}
