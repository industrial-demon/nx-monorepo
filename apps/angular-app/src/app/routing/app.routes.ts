import { Route } from '@angular/router'
import { RecipesComponent } from '../recipes/recipes.component'
import { ShoppingListComponent } from '../shopping-list/shopping-list.component'
import { ConnectionListComponent } from '../connection-list/connection-list.component'
import { NotFoundComponent } from '../not-found/not-found.component'
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component'
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component'
import { ExamplesComponent } from '../examples/examples.component'
import { TemplateDrivenFormComponent } from '../examples/template-driven-form/template-driven-form.component'
import { ReactiveFormComponent } from '../examples/reactive-form/reactive-form.component'
import { PipesComponent } from '../examples/pipes/pipes.component'
import { AttributeDirectivesComponent } from '../examples/attribute-directives/attribute-directives.component'
import { StructuralDirectivesComponent } from '../examples/structural-directives/structural-directives.component'
import { HttpComponent } from '../examples/http/http.component'
import { AuthComponent } from '../auth/auth.component'

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'connections', component: ConnectionListComponent },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      { path: 'attribute-directives', component: AttributeDirectivesComponent },
      {
        path: 'structural-directives',
        component: StructuralDirectivesComponent,
      },
      { path: 'template-driven-form', component: TemplateDrivenFormComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'http', component: HttpComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'not-found' },
]
