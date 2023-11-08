import { NavLink, useMatches } from 'react-router-dom'
interface MatchHandle {
  crumb: (data: MatchData) => React.ReactNode
}

interface MatchData {
  data: any 
}

export function Breadcrumbs() {
  const matches = useMatches()

  const crumbs = matches
    .filter(match => (match?.handle as MatchHandle)?.crumb)
    .map(match => (match.handle as MatchHandle)?.crumb(match.data as MatchData))

  return (
    <ol>
      {crumbs.map((crumb, index) => {
        return <li key={index}>{crumb}</li>
      })}
    </ol>
  )
}

export const Crumb = ({ path, title }: { path: string; title: string }) => {
  return (
    <div className="">
      <NavLink className="text-green-60" to="../">
        Home
      </NavLink>
      <span className="m-2 text-grey-50">/</span>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-grey-70 dark:text-grey-30 pointer-events-none cursor-not-allowed' : ''
        }
        to={path}
      >
        {title}
      </NavLink>
    </div>
  )
}
