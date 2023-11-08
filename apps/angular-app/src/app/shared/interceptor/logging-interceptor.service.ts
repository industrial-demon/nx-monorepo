import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { tap } from 'rxjs'

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req.headers)
    return next.handle(req).pipe(tap((events)=>{
      console.log(events)
    }))
  }
}
