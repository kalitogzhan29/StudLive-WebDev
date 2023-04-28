import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { LastNews } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class LastNewsService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client:HttpClient) { }
   news=[
    {
      newsImg:"\assets\news.jpg",
      newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
      newsTitle:"News 1"
    },
    {
      newsImg:"\assets\news.jpg",
      newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
      newsTitle:"News 2"
    },
    {
      newsImg:"\assets\news.jpg",
      newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
      newsTitle:"News 3"
    },
    {
      newsImg:"\assets\news.jpg",
      newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
      newsTitle:"News 4"
    },
    {
      newsImg:"\assets\news.jpg",
      newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
      newsTitle:"News 5"
    },

   ]

   getNews(): Observable<LastNews[]>{
    return this.client.get<LastNews[]>(`${this.BASE_URL}/api/news/`)
  }


  createNews(title: string, description: string): Observable<LastNews>{
    return this.client.post<LastNews>(
      `${this.BASE_URL}/api/news/`,
      {title: title,
      description: description}
    )
  }

  deleteNews(news_id: number): Observable<any>{
    return this.client.delete<any>(
      `${this.BASE_URL}/api/news/${news_id}/`
    )
  }
  
  updateNews(news_id: number, title: string, description: string): Observable<LastNews>{
    return this.client.put<LastNews>(
      `${this.BASE_URL}/api/news/${news_id}/`,
      {title: title,
      description: description}
    )
  }
}
