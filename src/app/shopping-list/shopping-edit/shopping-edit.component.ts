import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredient') nameIngredientRef: ElementRef;
  @ViewChild('amountIngredient') amountIngredientRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const nameIngredient = this.nameIngredientRef.nativeElement.value;
    const amountIngredient = this.amountIngredientRef.nativeElement.value;
    const newIngredient = new Ingredient(nameIngredient, amountIngredient);
    this.ingredientAdded.emit(newIngredient);
  }

}
