import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Test description',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5a961107ae08b5296f1ab7b2-3641081a.jpg',
      [
        new Ingredient('Bun', 2)
      ]),
    new Recipe(
      'Sausages',
      'With fries',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5a961107ae08b5296f1ab7b2-3641081a.jpg',
      [
        new Ingredient('Sauage', 2)
      ])
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
