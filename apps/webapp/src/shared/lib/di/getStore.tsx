import { InjectionToken, DependencyContainer } from 'tsyringe'

export function getStore<T>(
  container: DependencyContainer,
  token: InjectionToken<T>,
) {
  return container.resolve(token)
}
