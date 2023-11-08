import { ApplicationConfig } from '@angular/core'
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { appRoutes } from './routing/app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), provideAnimations()],
}
