import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core'
import { Ingredient } from '../../shared/models/ingredient.model'
import { ShoppingListService } from '../services/shopping-list.service'

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() addIngridient = new EventEmitter<Ingredient>()
  @ViewChild('amountInput') amountInput: ElementRef

  constructor(private shoppigListService: ShoppingListService) {}

  onAddIngridient(name: string) {
    this.shoppigListService.addIngredient(
      new Ingredient(name, Number(this.amountInput.nativeElement.value)),
    )
  }

}
