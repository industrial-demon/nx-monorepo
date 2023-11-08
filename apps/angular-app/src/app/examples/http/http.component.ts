import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { ConnectionListService } from '../../connection-list/connection-list.service'
import { ConnectionEntity } from '@generated/api'
import { Subscription, map } from 'rxjs'

type EditableConnection = ConnectionEntity & { editMode: boolean }

@Component({
  selector: 'nx-monorepo-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit, OnDestroy {
  connections: EditableConnection[] = []
  itemType: 'listitem' | 'input' = 'listitem'
  constructor(private connectionListService: ConnectionListService) {}
  connectionsSb: Subscription
  @ViewChild('editInput') editInput: ElementRef

  ngOnInit(): void {
    this.connectionListService.fetchConnections()
    this.connectionsSb = this.connectionListService.connections
      .pipe(map(conn => conn.map(con => ({ ...con, editMode: false }))))
      .subscribe(connections => (this.connections = connections))
  }

  onDbClickItem(connection: EditableConnection) {
    connection.editMode = true
  }

  onBlurInput(connection: EditableConnection) {
    connection.editMode = false
    this.connectionListService.updateConnection({
      name: connection.name,
      id: connection.id
    })
  }

  get isFetching() {
    return this.connectionListService.isFetching
  }

  get error() {
    return this.connectionListService.error
  }

  ngOnDestroy(): void {
    this.connectionsSb.unsubscribe()
  }
}
