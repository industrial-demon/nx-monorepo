import { Component, OnDestroy, OnInit } from '@angular/core'
import { RecipeService } from './services/recipe.service'
import { Recipe } from '../shared/models/recipe.model'
import { Subscription } from 'rxjs'
@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  public selectedRecipe: Recipe
  private sb: Subscription
  constructor(private recipeService: RecipeService) {}

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe
  }

  ngOnInit(): void {
    this.sb = this.recipeService.recipeSelected.subscribe(recipe => {
      this.selectedRecipe = recipe
    })
  }

  ngOnDestroy(): void {
      this.sb.unsubscribe()
  }
}
