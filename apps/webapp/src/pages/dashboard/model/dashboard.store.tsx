import { action, makeObservable, observable } from 'mobx'

import { users } from '../../../shared/api'

import { AxiosResponse } from 'axios'

import {
  inject,
  injectable,
  container,
} from 'tsyringe'
import { MobxQuery } from '../../../shared/lib/mob-x/mobx-query'
import { UserEntity } from '../../../shared/api/generated/users'

import {
  FilterByTypeListControl,
  createFilterTypeItemControl,
} from '@webapp/mobx-models'
import { filters } from '../config/filters'

export class Some {
  valueA = 'value Some'
  get some() {
    return this.valueA
  }
  public setValue = (value: string) => {
    this.valueA = value
  }
}

@injectable()
// @scoped(Lifecycle.ContainerScoped, DashboardStore)
export class DashboardStore {
  value = 0
  mobxQuery = new MobxQuery<AxiosResponse<UserEntity[]>>()
  constructor(
    @inject(FilterByTypeListControl)
    public readonly filterByType: FilterByTypeListControl,
  ) {
    makeObservable(this, {
      value: observable,
      setValue: action.bound,
    })
  }

  public onInit() {
    filters.forEach(filter => {
      this.filterByType.addControl(createFilterTypeItemControl(filter))
    })
  }

  loadUsers() {
    return this.mobxQuery.query({
      queryKey: ['users', 'list'],
      queryFn: async () => await users.usersControllerFindAll(),
      staleTime: 5000,
    })
  }

  setValue() {
    this.value++
  }
}


container.afterResolution<DashboardStore>(DashboardStore, (_t, result) => {
  ;(result as DashboardStore).onInit()
})

export { container as IoContainerPage }
