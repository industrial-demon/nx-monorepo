import { inject, injectable, container } from 'tsyringe'
import {
  RangeFilterControl,
  TabFilterControl,
  SearchBoxControl,
  ToggleGroupControl,
} from '@webapp/mobx-models'
@injectable()
class ManageStore {
  constructor(
    @inject(TabFilterControl)
    public readonly tabFilterControl: TabFilterControl,
    @inject(SearchBoxControl)
    public readonly searchBoxControl: SearchBoxControl,
    @inject(ToggleGroupControl)
    public readonly toggleFilterControl: ToggleGroupControl,
    @inject(RangeFilterControl)
    public readonly filterByTymeControl: RangeFilterControl,
  ) {
  }

  changeToggleFilterByRange = (value: RangeFilterControl["value"]) => {
    this.filterByTymeControl.onValueChange(value)
    if (value[0] > 10) {
      this.toggleFilterControl.remove('summary')
    } else {
      this.toggleFilterControl.add('summary')
    }
  }
}

container.afterResolution(TabFilterControl, (_t, tabFilterControl) => {
  if (!Array.isArray(tabFilterControl)) {
    tabFilterControl.onValueChange('saved_mapping_task')
  }
})

container.afterResolution(ToggleGroupControl, (_t, toggleFilterControl) => {
  if (!Array.isArray(toggleFilterControl)) {
    ;['summary', 'scheduled'].forEach(value => toggleFilterControl.add(value))
  }
})

export { container as manageContainer, ManageStore }
