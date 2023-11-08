import { Component, OnInit } from '@angular/core'
import { RouteEnum } from './shared/enums/routes.enum'
import { ShoppingListService } from './shopping-list/services/shopping-list.service'
import { Observable, } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  route: RouteEnum = 'recipes'

  title = 'Angular Application'
  food = 'Pizza'
  sideBarOpen = true
  showSecret = false
  logs: Array<string> = []
  showPassword = false

  constructor(private shoppingListService: ShoppingListService) {}
  onToggleSideBar() {
    this.sideBarOpen = !this.sideBarOpen
  }

  togglePassword() {
    this.showPassword = !this.showPassword
    this.logs.push(new Date().toISOString())
  }

  onToggle() {
    this.showSecret = !this.showSecret
    const isoString = new Date().toISOString()
    this.logs.push(isoString)
  }

  ngOnInit() {
    const observable = new Observable(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        if (count === 5) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error(`Count > ${count}`))
        }
        count++
      }, 1000)
    })


    observable
      .pipe(
            //@ts-ignore
        map((data: number) => data * 3),
        filter((data: number) => data % 2 === 0),
      )
      .subscribe(
        count => {
          console.log(count)
        },
        error => {
          console.log(error.message, 'ERR')
        },
        () => {
          console.log('Complete')
        },
      )
  }
  getIndex(idx: string) {
    return this.logs.indexOf(idx)
  }
}
