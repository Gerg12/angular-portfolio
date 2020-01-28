import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { IBasic } from '../interface/interfaces';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public basics: IBasic;

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(basics => this.basics = basics.basics);
  }

}
