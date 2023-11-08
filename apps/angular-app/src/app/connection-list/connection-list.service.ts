import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject, catchError, throwError, map, tap } from 'rxjs'
import { ConnectionEntity, PaginationDto } from '@generated/api'

@Injectable({
  providedIn: 'root',
})
export class ConnectionListService {
  isFetching = false
  error: null | string
  connections = new Subject<ConnectionEntity[]>()
  constructor(private http: HttpClient) {}

  createConnection() {
    this.http
      .post('http://localhost:4002/api/connections', {})
      .subscribe((data: any) => {
        console.log(data)
      })
  }

  fetchConnections() {
    this.isFetching = true
    this.http
      .get<PaginationDto>('http://localhost:4002/api/connections', {
        headers: new HttpHeaders({
          'Custom-Header': 'Hello',
        }),
        params: new HttpParams().set('page', 2).append('perPage', 5),
        observe: 'events',
      })
      .pipe(
        map(events => {
          if (events.type === HttpEventType.Response) {
            return events.body
          }
          return null
        }),
        catchError(error => {
          return throwError(() => error)
        }),
        tap(events => {
          console.log(events)
        }),
      )
      .subscribe({
        next: data => {
          this.isFetching = false
          if (data !== null) {
            this.connections.next(data.result)
          }
        },
        error: (err: Error) => {
          this.isFetching = false
          this.error = err.message
        },
        complete: () => {
          console.log('COMPLETE')
        },
      })
  }

  updateConnection(connection: Partial<ConnectionEntity>) {
    this.isFetching = true
    this.http
      .patch<ConnectionEntity>(
        `http://localhost:4002/api/connections/${connection.id}`,
        connection,
      )
      .subscribe({
        next: () => {
          this.isFetching = false
          this.fetchConnections()
        },
        error: (err: Error) => {
          this.isFetching = false
          this.error = err.message
        },
        complete: () => {
          console.log('PATCHED')
        },
      })
  }
}
