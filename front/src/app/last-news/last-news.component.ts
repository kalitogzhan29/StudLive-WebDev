import { Component, OnInit } from '@angular/core';
import { LastNewsService } from '../service/last-news/last-news.service';
@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent implements OnInit {
  

  constructor(private service:LastNewsService){}
  newsList:any;
  ngOnInit(): void {
    this.newsList=this.service.news;
  }
}
