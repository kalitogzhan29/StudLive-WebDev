import { Component, OnInit } from '@angular/core';
import { LastNewsService } from '../service/last-news/last-news.service';
import { LastNews } from '../models';
@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent {
  vacancies: LastNews[] = [];
  id: number | undefined;
  title: string = '';
  description: string = '';

  constructor(private lastNewsService:LastNewsService){}
 
  // ngOnInit(): void{
  //   this.id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.lastNewsService.getVacanci(this.id).subscribe((vacancies) => this.vacancies = vacancies);
  // }
}
