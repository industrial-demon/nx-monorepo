import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Array<any>, ...args: any[]) {
    if (value.length === 0) {
      return value
    }
    return value.sort((a, b) => a.name.localeCompare(b.name))
  }
}
