import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { RouteEnum } from '../shared/enums/routes.enum'

interface RouteLink {
  path: `/${RouteEnum}`
  title: string
  icon: string
}

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent implements OnInit {
  @Output() clickNavItem = new EventEmitter<RouteEnum>()
  iconName = 'code'
  routes: RouteLink[] = [
    { path: '/recipes', title: 'Recipes', icon: 'fastfood icon' },
    { path: '/shopping-list', title: 'Shopping List', icon: 'info' },
    { path: '/connections', title: 'Connetions', icon: 'polymer' },
    { path: '/examples', title: 'Learn section', icon: 'fiber_new' },
  ]
  constructor() {}

  ngOnInit(): void {
    console.log('init')
  }

  onToggle() {
    if (this.iconName === 'code') {
      this.iconName = 'favorite'
    } else {
      this.iconName = 'code'
    }
  }
}
