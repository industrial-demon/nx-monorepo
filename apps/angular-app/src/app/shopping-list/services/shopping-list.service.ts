import { Injectable } from '@angular/core'
import { Ingredient } from '../../shared/models/ingredient.model'
import { Subject } from 'rxjs'

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<Array<Ingredient>>()
  private ingridients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]

  getIngridients(): Array<Ingredient> {
    return [...this.ingridients]
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingridients.push(ingredient)
    this.ingredientChanged.next([...this.ingridients])
  }

  selectRecipeIngredients(ingredients: Array<Ingredient>): void {
    this.ingridients = ingredients
    this.ingredientChanged.next([...this.ingridients])
  }
}
