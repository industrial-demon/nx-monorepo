import { Routing } from '../router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../shared/lib/react-query/query-client'


export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Routing />
    </QueryClientProvider>
  )
}

export default App
