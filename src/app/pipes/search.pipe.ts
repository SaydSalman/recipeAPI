import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:any[],searchKey:string): any[] {
    const result:any = []
    if(!recipes && searchKey==""){
      return recipes
    }else{
      recipes.forEach((recipe)=>{
        console.log(recipe);
        if(recipe.name?.trim().toLowerCase().includes(searchKey.trim().toLowerCase()) || recipe.cuisine?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
          result.push(recipe)
        }
      })
    }
    return result;
  }

}
