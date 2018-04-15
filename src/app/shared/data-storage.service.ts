import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes () {
    return this.http.put('https://ng-recipe-book-623ba.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-623ba.firebaseio.com/recipes.json')
      .subscribe((response: Recipe[]) => {
        const recipes: Recipe[] = response;
        this.recipeService.updateRecipes(recipes);
      });
  }
}
