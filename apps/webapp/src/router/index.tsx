import {
  createBrowserRouter,
  Link,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import { NoFound } from '../shared/layouts/NoFound'
import { Root } from '../pages/root/root.page'
import ThemeProvider from '../shared/providers/theme-provider'
import { DashboardPage } from '../pages/dashboard/dashboard.page'
import { ConnectionsPage } from '../pages/connections/connections.page'
import { Crumb } from '@webapp/ui-kit'
import { lazy, Suspense } from 'react'
import { SignInPage } from '../pages/sign-in/sign-in.page'
import { sessionModel } from '../entities/session'
import { observer } from 'mobx-react-lite'

const ManagePage = lazy(() =>
  import('../pages/manage/manage.page').then(module => ({
    default: module.ManagePage,
  })),
)

const AuthGuard = observer(() => {
  if (sessionModel.isLogin) {
    return <Outlet />
  }
  return <Navigate to="/sign-in" replace={true} />
})

function ErrorBoundary() {
  return <h1>Error</h1>
}

export const routing = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </ThemeProvider>
    ),

    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <AuthGuard />,
        errorElement: <ErrorBoundary />,

        children: [
          {
            path: '/',
            element: <Root />,
            children: [
              {
                path: 'dashboard',
                element: <DashboardPage />,
                handle: {
                  crumb: () => <Link to="/dashboard">Messages</Link>,
                },
              },
              { path: 'manage', element: <ManagePage /> },
              { path: 'monitor', element: <div>Under Construction</div> },
              {
                path: 'connections',
                element: <ConnectionsPage />,
                handle: {
                  crumb: () => (
                    <Crumb title="Connections" path="/connections" />
                  ),
                },
              },
              { path: 'admin', element: <div>Under Construction</div> },
            ],
          },
          {
            path: '*',
            element: <NoFound />,
          },
        ],
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
        loader: () => {
          return null
        },
      },
    ],
  },
])

export const Routing = () => {
  return <RouterProvider router={routing} />
}
