import { Component } from '@angular/core'
import { RecipeService } from '../services/recipe.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  get recipes() {
    return this.recipeService.getRecipes()
  }

  toNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute })
  }
}
