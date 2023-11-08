import { HTMLAttributes } from 'react'
import { cx } from 'class-variance-authority'

export const SidebarFilterContainer = ({
  heading,
  children,
  className,
}: HTMLAttributes<HTMLDivElement> & {
  heading: string
}) => {
  return (
    <div
      className={cx(
        'flex flex-col max-w-[398px] w-[398px]',
        'border border-grey-20  bg-white',
        'dark:bg-grey-90 dark:text-grey-40 rounded-2xl h-fit p-[30px]',
        className,
      )}
    >
      <h3 className="text-xl font-bold">{heading}</h3>
      {children}
    </div>
  )
}
