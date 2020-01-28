import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { ViewportScroller } from '@angular/common';
import { IBasic } from '../interface/interfaces';
@Component({
  selector: 'hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {
  public basics: IBasic[];

  constructor(
    private service: PortfolioService,
    private viewportScroller: ViewportScroller
    ) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(basics => this.basics = basics.basics);
  }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
