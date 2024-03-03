import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipeapiService {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(this.apiUrl);
  }
}
