import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from '../../shared/models/recipe.model'
import { Ingredient } from '../../shared/models/ingredient.model'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service'
import { Subject } from 'rxjs'

@Injectable()
export class RecipeService {
  public recipeSelected = new Subject<Recipe>()
  private recipes = [
    new Recipe(
      'Burger',
      'yummy burefer recipe decription',
      'https://slon-ua.com/image/cache/webp/catalog/kopii-naduvnye/burger-inflatable-classic-cop-1000x1000.webp',
      [
        new Ingredient('Cutlets', 1),
        new Ingredient('Cucumber', 1),
        new Ingredient('Burger buns', 2),
      ],
    ),
    new Recipe(
      'Schnitzel',
      'yummy Schnitzel recipe decription',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)],
    ),
    new Recipe(
      'Spaghetti',
      'yummy chicken recipe decription',
      'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps108178_TH163620B11_11_3b.jpg',
      [],
    ),
  ]

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes]
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  selectIngridients(ingridients: Ingredient[]) {
    this.shoppingListService.selectRecipeIngredients(ingridients)
  }
}
