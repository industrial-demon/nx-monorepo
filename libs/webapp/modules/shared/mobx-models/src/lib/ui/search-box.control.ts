import { injectable } from 'tsyringe'
import { StringStore } from '../atomic/StringStore'
@injectable()
export class SearchBoxControl {
  
  private readonly searchValueControl = new StringStore('')

  get value() {
    return this.searchValueControl.get()
  }

  onSearch = (value: string) => {
    this.searchValueControl.set(value)
  }
}
