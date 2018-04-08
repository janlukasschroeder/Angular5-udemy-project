import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5a961107ae08b5296f1ab7b2-3641081a.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
