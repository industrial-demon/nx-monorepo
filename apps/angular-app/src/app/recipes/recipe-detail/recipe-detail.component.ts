import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Recipe } from '../../shared/models/recipe.model'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service'
import { ActivatedRoute, Router } from '@angular/router'
import { RecipeService } from '../services/recipe.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input({ required: true }) id: number
  recipe: Recipe
  sub: Subscription
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  toShoppingList() {
    this.recipeService.selectIngridients(this.recipe.ingredients)
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) {
        this.id = Number(id)
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  onEditRecipe(event: Event) {
    event.preventDefault()
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute })
  }
}
