'use client'

import { getConnections } from '../actions/getConnections'
import { useQuery } from '@tanstack/react-query'

const Dashboard = () => {
  const connectionsQuery = useQuery({
    queryKey: ['connections', 'list'],
    queryFn: async () => (await getConnections()).data,
    enabled: false,
  })

  console.log(connectionsQuery)
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => connectionsQuery.refetch()}>
        Fetch connections
      </button>

      <ul>
        {connectionsQuery.data?.result?.map((conn: any) => (
          <li key={conn.id}>{conn.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
