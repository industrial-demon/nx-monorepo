import { ReactNode } from 'react'

export const MainLayout = ({
  header,
  children,
}: {
  header: ReactNode
  children?: ReactNode
}) => {
  return (
    <div className="app flex flex-col min-h-screen">
      {header}

      <main className="flex-1 grid min-h-full w-full overflow-y-auto">{children}</main>
      <footer className="grid-row-span-1 h-14 bg-slate-300"></footer>
    </div>
  )
}
