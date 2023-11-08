import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
  ) {}

  signUp(signUpDto: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}auth/local/signup`, signUpDto)
  }

  login(signUpDto: { email: string; password: string }) {
      console.log(this.baseUrl, 'Login')
    return this.http.post(`${this.baseUrl}/auth/local/signin`, signUpDto)
  }
}
