import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onGettingSelectedRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }
}
