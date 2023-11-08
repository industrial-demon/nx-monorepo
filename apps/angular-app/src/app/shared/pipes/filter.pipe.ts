import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterItem',
  pure: false // if false pipe rerecalculate data
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propFilter: string) {
    if (value.length === 0 || filterString === '') {
      return value
    }
    const filtered = value.filter(
      (item: any) => item[propFilter] === filterString,
    )

    return filtered
  }
}
