import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { tap } from 'rxjs'

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifyRequest = req.clone({
      setHeaders: {
        Autorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    return next.handle(modifyRequest).pipe(tap((events)=>{
      console.log(events)
    }))
  }
}
