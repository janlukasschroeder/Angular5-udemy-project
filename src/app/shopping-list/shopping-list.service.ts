import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 2)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  getIngredients() {
    // return new object
    // return this.ingredients.slice();
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
