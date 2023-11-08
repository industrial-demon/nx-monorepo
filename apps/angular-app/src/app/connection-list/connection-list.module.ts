import { NgModule } from '@angular/core'
import { ConnectionListComponent } from './connection-list.component'
import { RouterModule } from '@angular/router'
import { ConnectionComponent } from './connection/connection.component'

@NgModule({
  declarations: [ConnectionListComponent, ConnectionComponent],
  imports: [
    RouterModule.forChild([
      { path: 'connection', component: ConnectionComponent },
    ]),
  ],
  exports: [ConnectionListComponent],
})
export class ConnectionListModule {}
