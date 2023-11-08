import { Breadcrumbs } from '@webapp/ui-kit'
import { cx } from 'class-variance-authority'
import { HTMLAttributes, ReactNode } from 'react'

export const PageLayout = ({
  children,
  filters,
  header,
}: {
  header: ReactNode
  children: ReactNode
  filters: ReactNode[]
}) => {
  return (
    <div
      className="
    grid grid-cols-page-layout
    bg-grey-10 dark:bg-grey-90 h-full pb-10 px-8"
    >
      <div className="col-span-2">{header}</div>
      <aside className="flex flex-col col-auto gap-[30px]">{filters}</aside>
      <section className="table-slot col-span-1 mb-5">{children}</section>
    </div>
  )
}

export function PageHeader({
  title,
  children,
  className,
}: {
  title: string
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('page-header mb-[35px]', className)}>
      <div className="flex flex-col pt-[55px]">
        <div
          className={cx(
            'flex items-center justify-between',
            children && 'mb-14',
          )}
        >
          <h2 className="font-bold text-2xl dark:text-grey-30">{title}</h2>
          <Breadcrumbs />
        </div>

        {children}
      </div>
    </div>
  )
}
