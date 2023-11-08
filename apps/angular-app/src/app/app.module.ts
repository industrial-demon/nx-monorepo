import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RecipesComponent } from './recipes/recipes.component'
import { SideNavbarComponent } from './side-navbar/side-navbar.component'
import { AppComponent } from './app.component'
import { HeaderModule } from './header/header.module'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { ConnectionListModule } from './connection-list/connection-list.module'

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { DropdownDirective } from './shared/directives/dropdown.directive'
import { ShoppingListService } from './shopping-list/services/shopping-list.service'
import { RoutingModule } from './routing/routing.module'
import { NotFoundComponent } from './not-found/not-found.component'
import { DynamicIconDirective } from './shared/directives/dynamicIcon.directive'
import { HighlightDirective } from './shared/directives/highlight.directive'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { ExamplesComponent } from './examples/examples.component'
import { TemplateDrivenFormComponent } from './examples/template-driven-form/template-driven-form.component'
import { MatModule } from './app.mat.module'
import { ReactiveFormComponent } from './examples/reactive-form/reactive-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { PipesComponent } from './examples/pipes/pipes.component'
import { ShortenPipe } from './shared/pipes/shorted.pipe'
import { FilterPipe } from './shared/pipes/filter.pipe'
import { AttributeDirectivesComponent } from './examples/attribute-directives/attribute-directives.component'
import { StructuralDirectivesComponent } from './examples/structural-directives/structural-directives.component'
import { ReversePipe } from './shared/pipes/reverse.pipe'
import { SortPipe } from './shared/pipes/sort.pipe'
import { HttpComponent } from './examples/http/http.component'
import { AutoFocusDirective } from './shared/directives/autoFocus.directive'
import { AuthInterceptorService } from './shared/interceptor/auth-interceptor.service'
import { LoggingInterceptorService } from './shared/interceptor/logging-interceptor.service'
import { AuthComponent } from './auth/auth.component'
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component'

const baseUrl = 'https://nest-server-ngrok-app.onrender.com/api'

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    ExamplesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    PipesComponent,
    HttpComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    //directives=--------------
    AutoFocusDirective,
    DynamicIconDirective,
    HighlightDirective,
    DropdownDirective,
    //pipe=--------------------
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
  ],
  exports: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
    ConnectionListModule,
    FormsModule,
    MatModule,
    
  ],
  providers: [
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
    { provide: 'BASE_URL', useValue: baseUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
