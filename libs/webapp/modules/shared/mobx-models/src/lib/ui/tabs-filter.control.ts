import { injectable } from 'tsyringe'
import { StringStore } from '../atomic/StringStore'

@injectable()
export class TabFilterControl {
  
  private readonly stringControl = new StringStore("")

  get value() {
    return this.stringControl.get()
  }

  onValueChange = (value: string) => {
    this.stringControl.set(value)
  }
}
