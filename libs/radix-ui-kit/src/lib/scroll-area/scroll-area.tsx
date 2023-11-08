import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cva, cx } from 'class-variance-authority'

const scrollAreaRoot = cva([
  'scroll-area-root',
  'rounded overflow-hidden',
  'shadow-[0_2px_10px] shadow-gray-700 bg-white',
])

const scrollAreaViewPort = cva([
  'scroll-area-root-viewport',
  'w-full h-full rounded',
])

const scrollBar = cva([
  'scroll-bar',
  'flex select-none touch-none',
  'p-0.5 bg-slate-400 transition-colors duration-[160ms] ease-out',
  'data-[orientation=vertical]:w-2.5',
  'data-[orientation=horizontal]:flex-col',
  'data-[orientation=horizontal]:h-2.5',
])

const scrollThumb = cva([
  'scroll-thumb',
  'flex-1 bg-slate-700 rounded-[10px]',
  'relative',
  'before:content-[""]',
  'before:w-full before:h-full',
  'before:min-w-[44px] before:min-h-[44px]',
  'before:absolute before:top-1/2 before:left-1/2',
  'before:-translate-x-1/2 before:-translate-y-1/2',
])

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps

const ScrollArea = ({ children, className }: ScrollAreaProps) => {
  console.log(className)
  return (
    <ScrollAreaPrimitive.Root
      type="auto"
      className={cx(scrollAreaRoot({ className }))}
    >
      <ScrollAreaPrimitive.Viewport className={scrollAreaViewPort()}>
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        className={scrollBar()}
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb className={scrollThumb()} />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Scrollbar
        className={scrollBar()}
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb className={scrollThumb()} />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Corner className="bg-slate-300" />
    </ScrollAreaPrimitive.Root>
  )
}

export { ScrollArea, type ScrollAreaProps }
