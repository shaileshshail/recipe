import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

const url= {
  getByName:'search.php?s=',
  getByFirstletter:'search.php?f=',
  getById:'lookup.php?i=',
  getRandom:'random.php',
  getByCategory:'filter.php?c=',
  getByArea:'filter.php?a='
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http:HttpClient) { }
  BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
  getByName(name:string){
    return this.http.get(this.BASE_URL+url.getByName+name);
  }
  getByFirstletter(firstLetter:string){
    return this.http.get(this.BASE_URL+url.getByFirstletter+firstLetter);
  }
  getById(id:string){
    return this.http.get(this.BASE_URL+url.getById+id);
  }
  getByCategory(category:string){
    return this.http.get(this.BASE_URL+url.getByCategory+category);
  }

  getRandom(){
    return this.http.get(this.BASE_URL+url.getRandom);
  }
  getByArea(area:string){
    return this.http.get(this.BASE_URL+url.getByArea+area);
  }
}
