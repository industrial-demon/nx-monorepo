import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { MatSelectChange } from '@angular/material/select'
import { Framework, UserData, frameworkVersions } from '../config'

@Component({
  selector: 'nx-monorepo-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('tdForm') form: NgForm
  userData: UserData
  frameworkList: Array<Framework>
  frameworkVersions: Array<Framework>

  onSubmit() {
    this.userData = this.form.value
  }

  onFrameworkChange(change: MatSelectChange) {
    this.frameworkVersions =
      frameworkVersions[change.value as keyof typeof frameworkVersions]
  }

  onResetForm(): void {
    this.form.resetForm()
    this.frameworkVersions = []
  }

  ngOnInit(): void {
    this.frameworkList = [
      { value: 'angular ', viewValue: 'Angular' },
      { value: 'vue', viewValue: 'Vue' },
      { value: 'react', viewValue: 'React' },
    ]
  }
}
