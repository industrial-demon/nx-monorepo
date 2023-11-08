import { BooleanStore } from '../atomic/BooleanStore'

export class ChecboxControl extends BooleanStore {
  constructor(checked = false) {
    super(checked)
  }

  get checked() {
    return this.get()
  }
  onCheckedChange(checked: boolean) {
    this.set(checked)
  }
}
