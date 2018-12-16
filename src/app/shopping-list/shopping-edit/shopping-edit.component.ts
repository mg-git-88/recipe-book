import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredient: Ingredient;
  ingredients: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

  onAddingIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQuantity = this.quantityInputRef.nativeElement.value;
    this.ingredient = new Ingredient(ingName, ingQuantity);
    this.ingredientAdded.emit(this.ingredient);
  }
}
