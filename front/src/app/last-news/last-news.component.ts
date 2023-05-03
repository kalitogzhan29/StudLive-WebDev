import { Component, OnInit } from '@angular/core';
import { LastNewsService } from '../service/last-news/last-news.service';
import { LastNews } from '../models';
@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})


export class LastNewsComponent {
  news: LastNews[] = []
  newTitle: string = '';
  newDescription: string = '';
 

  constructor(private lastNewsService:LastNewsService){}
  getOrganizations() {
    this.lastNewsService.getNews().subscribe((data) =>
      this.news = data
    );
  }

  addOrganization(){
    this.lastNewsService.createNews(this.newTitle, this.newDescription,).subscribe((data) => {
      this.news.push(data)
      this.newTitle=''
      this.newDescription=''
   
    })
  }

  deleteOrganization(organization_id: number){
    this.lastNewsService.deleteNews(organization_id).subscribe((organization) =>{
      this.news = this.news.filter((data) => organization.id !== organization_id);
    })
  }

  updateOrganization(organization_id: number){
    this.lastNewsService.updateNews(organization_id, this.newTitle, this.newDescription,).subscribe((data) => {
      this.news.forEach((data) =>{
          if (data.id == organization_id){
            data.title = this.newTitle
          }
        }
      );
      this.newTitle = ''
      this.newDescription=''

    })
  }
}
