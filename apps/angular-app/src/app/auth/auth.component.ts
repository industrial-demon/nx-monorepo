import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from './auth.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  @ViewChild('authForm') authForm: NgForm

  constructor(private authService: AuthService) {}
  isLoginMode = false
  isLoading = false
  error: string | null = null

  onSubmit() {
    if (!this.authForm.valid) {
      return
    }

    this.isLoading = true

    this.authService.login(this.authForm.value).subscribe({
      next: user => {
        console.log(user)
        this.isLoading = false
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.error.message
        this.isLoading = false
      },
    })

    // this.authForm.reset()
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode
  }
}
