import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { LastNews } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class LastNewsService {
  BASE_URL = 'http://127.0.0.1:8000'
  id: number | undefined;


  constructor(private client:HttpClient) { }
  
   getNews(): Observable<LastNews[]>{
    return this.client.get<LastNews[]>(`${this.BASE_URL}/api/news/`)
  }


  createNews(title: string, description: string): Observable<LastNews>{
    return this.client.post<LastNews>(
      `${this.BASE_URL}/api/news/`,
      {title: title,
      description: description,
    }
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
      description: description,
     }
    )
  }

}
