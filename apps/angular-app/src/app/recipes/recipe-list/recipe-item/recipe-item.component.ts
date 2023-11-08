import { Component, Input } from '@angular/core'
import { RecipeService } from '../../services/recipe.service'
import { Recipe } from '../../../shared/models/recipe.model'

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input({ required: true }) recipe: Recipe
  @Input({ required: true }) index: number

  constructor(private recipeService: RecipeService) {}

  onRecipeClick() {
    this.recipeService.recipeSelected.next(this.recipe)
  }
}
