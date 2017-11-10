import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'; 

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  fetchNews(id: number): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=7&per_page="+id+"&page=1";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchNewsBFS(id: number): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=6&per_page="+id+"&page=1";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchNewsFace(id: number): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=3&per_page="+id+"&page=1";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchNewsEvent(id: number): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=26&per_page="+id+"&page=1";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchNewsSearch(search): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&search="+search;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchNewsDF(id: number): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=4&per_page="+id+"&page=1";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchSingle(data: any): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/posts/"+data+"?_embed";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

  fetchSingleAbout(): Observable<any>{
    var url = "http://sosnation.com/wp-json/wp/v2/pages/96?_embed";
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

}
