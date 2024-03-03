import { Component, OnInit } from '@angular/core';
import { RecipeapiService } from '../services/recipeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  searchKey:string=""
  recipes: any[] = [];
  allRecipesGlobal:any[]=[];
  selections:string[]=['Dinner','Snack','Lunch','All']
  
 constructor(private api:RecipeapiService){}
 ngOnInit(): void {
   this.getAllRecipes()
 }


    getAllRecipes(){
      this.api.getRecipes().subscribe((data:any)=>{
        this.recipes = data.recipes
        this.allRecipesGlobal = data.recipes;
       })
    }

 sortRecipes(option:string){
    if(option === 'All'){
      this.recipes= this.allRecipesGlobal
      
    }else{
      this.recipes = this.allRecipesGlobal.filter((item)=>{
        if(item.mealType.includes(option)){
          return item;
        }
      })
    }
    
 }

 

}
