import { Injectable } from '@angular/core';
import { LastNews } from 'src/app/models';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LastNewsService {
  BASE_URL = 'http://127.0.0.1:8000'
  id: number | undefined;

  constructor(private client: HttpClient) {}

  ngOnInit(): void{
  }

  getLastNews(): Observable<LastNews[]>{
    return this.client.get<LastNews[]>(`${this.BASE_URL}/api/v`)
  }
  //  news=[
  //   {
  //     newsImg:"\assets\news.jpg",
  //     newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
  //     newsTitle:"News 1"
  //   },
  //   {
  //     newsImg:"\assets\news.jpg",
  //     newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
  //     newsTitle:"News 2"
  //   },
  //   {
  //     newsImg:"\assets\news.jpg",
  //     newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
  //     newsTitle:"News 3"
  //   },
  //   {
  //     newsImg:"\assets\news.jpg",
  //     newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
  //     newsTitle:"News 4"
  //   },
  //   {
  //     newsImg:"\assets\news.jpg",
  //     newsDescrip:"After more than a year-long battle with the bombastic Florida governor, the entertainment behemoth filed a blifor having the gall to speak out against the so-called  bill.Disney regrets that it has come to this,” the company said in its lawsuit, arguing ",
  //     newsTitle:"News 5"
  //   },

  // ]
}
