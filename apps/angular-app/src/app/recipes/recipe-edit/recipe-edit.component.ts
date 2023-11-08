import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'nx-monorepo-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number
  editMode = false
  sb: Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sb = this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'))
      this.id = id
      this.editMode = Boolean(id)
    })
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe()
  }
}
