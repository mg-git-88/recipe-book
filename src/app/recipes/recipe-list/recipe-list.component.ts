import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipe: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Roasted Bacon',
      'Roasted slowly just to elevate the taste to your liking',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'
    ),
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Peperoni Pizza',
      'Classic Italian Peperoni pizza',
      '../../assets/pepperoni-pizza.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}

  onCapturedRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }
}
