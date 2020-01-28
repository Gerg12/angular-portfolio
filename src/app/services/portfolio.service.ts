import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends DataService {

  constructor(http: Http) {
    super('https://gitconnected.com/v1/portfolio/gregar12', http);
  }

}
