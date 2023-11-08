import { Component } from '@angular/core'

@Component({
  selector: 'nx-monorepo-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  appStatus = new Promise(resolve => {
    setTimeout(() => {
      resolve('stable')
    }, 3000)
  })

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ]

  filteredStatus = ''

  getStatusClasses(server: {
    instanceType: string
    name: string
    status: string
    started: Date
  }) {
    return {
      'bg-green-200 text-green-700': server.status === 'stable',
      'bg-orange-200 text-orange-700': server.status === 'offline',
      'bg-red-200 text-red-700': server.status === 'critical',
    }
  }

  getChipColorByStatus(status: string) {
    switch (status) {
      case 'stable':
        return 'primary'
      case 'offline':
        return 'warn'
      case 'critical':
        return 'accent'
    }
  }
}
