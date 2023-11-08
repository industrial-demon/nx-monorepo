import { Component, OnDestroy, OnInit } from '@angular/core'
import { Ingredient } from '../shared/models/ingredient.model'
import { ShoppingListService } from './services/shopping-list.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingredient[]
  private sb: Subscription
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients()
    this.sb = this.shoppingListService.ingredientChanged.subscribe(
      ingredients => (this.ingridients = ingredients),
    )
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe()
  }
}
