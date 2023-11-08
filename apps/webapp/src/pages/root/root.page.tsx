import { Outlet, useNavigate } from 'react-router-dom'
import { MainLayout } from '../../shared/layouts'

import { Header } from '../../widgets/header/header'
import { nanoid } from 'nanoid'

import {
  AdminIcon,
  ConnectionsIcon,
  DashboardIcon,
  ManageIcon,
  MonitorIcon,
} from '@webapp/icons'
import { NavPanel } from '@webapp/ui-kit'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { sessionModel } from '../../entities/session'

export const Root = observer(() => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!sessionModel.isLogin) {
      navigate('/sign-in')
    }
  }, [navigate])

  return (
    <MainLayout
      header={
        <Header
          navPanel={
            <NavPanel
              routes={[
                {
                  to: 'dashboard',
                  title: 'Dashboard',
                  icon: <DashboardIcon />,
                  id: nanoid(),
                },
                {
                  to: 'manage',
                  title: 'Manage',
                  icon: <ManageIcon />,
                  id: nanoid(),
                },
                {
                  to: 'monitor',
                  title: 'Monitor',
                  icon: <MonitorIcon />,
                  id: nanoid(),
                },

                {
                  to: 'connections',
                  title: 'Connections',
                  icon: <ConnectionsIcon />,
                  id: nanoid(),
                },
                {
                  to: 'admin',
                  title: 'Admin',
                  icon: <AdminIcon />,
                  id: nanoid(),
                },
              ]}
            />
          }
        />
      }
    >
      <Outlet />
    </MainLayout>
  )
})
