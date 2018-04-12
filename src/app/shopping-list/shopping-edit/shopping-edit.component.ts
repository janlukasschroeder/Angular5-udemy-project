import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {LoggingService} from "../../services/logging.service";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredient') nameIngredientRef: ElementRef;
  @ViewChild('amountIngredient') amountIngredientRef: ElementRef;

  constructor(private logger: LoggingService, private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(form: NgForm) {
    const f = form.value;
    const nameIngredient = f.name;
    const amountIngredient = f.amount;
    const newIngredient = new Ingredient(nameIngredient, amountIngredient);
    this.slService.addIngredient(newIngredient);
    this.logger.log('New ingredient added');
  }

}
