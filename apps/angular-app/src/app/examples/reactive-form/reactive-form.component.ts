import { Component, OnInit } from '@angular/core'
import {
  FormArray,
  FormControl,
  FormGroup,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import { Framework, UserData, frameworkVersions } from '../config'
import { MatSelectChange } from '@angular/material/select'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'

@Component({
  selector: 'nx-monorepo-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup
  userData: UserData
  genders: Array<string>
  frameworkList: Array<Framework>
  frameworkVersions: Array<Framework>
  status: string

  forbiddenNames: Array<string>

  onSubmit() {
    this.userData = this.form.value
    console.log(this.form)
  }

  onFrameworkChange(change: MatSelectChange) {
    this.frameworkVersions =
      frameworkVersions[change.value as keyof typeof frameworkVersions]
    this.form.get('frameworkVersion')?.enable({ onlySelf: true })
  }

  onResetForm(): void {
    this.form.reset()
    this.frameworkVersions = []
  }

  onAddHobby() {
    const hobby = new FormGroup({
      name: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
    })
    ;(<FormArray>this.form.get('hobbies'))?.push(hobby)
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray<
      FormGroup<{ name: FormControl }>
    >
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        this.validateName.bind(this),
      ]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.validateEmail as any],
      }),
      gender: new FormControl('', Validators.required),
      framework: new FormControl(''),
      frameworkVersion: new FormControl({ value: '', disabled: true }),
      dateOfBirth: new FormControl(''),
      hobbies: new FormArray([], [Validators.min(1)]),
    })

    this.frameworkList = [
      { value: 'angular', viewValue: 'Angular' },
      { value: 'vue', viewValue: 'Vue' },
      { value: 'react', viewValue: 'React' },
    ]

    this.genders = ['Male', 'Female', 'Other']

    this.forbiddenNames = ['Drew', 'Max']

    this.form.statusChanges.subscribe(status => {
      this.status = status
    })

    const frameworkControl = this.form.get('framework')
    if (frameworkControl?.value) {
      this.frameworkVersions = frameworkVersions[frameworkControl.value]
    }
  }

  validateName(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenNames?.includes(control.value)) {
      return { forbiddenName: true }
    }

    return null
  }

  validateEmail(control: FormControl): Promise<ValidationErrors | null> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailForbidden: true })
        } else {
          resolve(null)
        }
      }, 3000)
    })

    return promise
  }
}
