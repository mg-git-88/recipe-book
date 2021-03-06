import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.selectedRecipe.emit(this.recipeItem);
  }
}
