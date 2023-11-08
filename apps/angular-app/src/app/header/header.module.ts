import { NgModule } from '@angular/core'
import { HeaderComponent } from './header.component'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  declarations: [HeaderComponent],
  imports: [MatIconModule, MatMenuModule, MatButtonModule,  BrowserModule,],
  exports: [HeaderComponent],
})
export class HeaderModule {}
