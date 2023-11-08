import { ReactNode } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const tabTriggerCss = cva(
  [
    'tab-trigger',
    'group',
    'flex-1 px-3 py-2.5',
    'border-gray-300',
    'border-b border-r last:border-r-0',
    'first:rounded-tl-lg last:rounded-tr-lg',

    'focus-visible:ring-opacity-75',
    'focus:z-10 focus:outline-none focus-visible:ring',

    'focus-visible:radix-state-active:border-b-transparent',
    'focus-visible:radix-state-active:border-b-transparent',

    'radix-state-inactive:bg-gray-50',
    'radix-state-active:border-b-2',
    'radix-state-active:pb-[2px]',
  ],
  {
    variants: {
      tabVariant: {
        black: [
          'text-slate-500',
          'radix-state-active:border-b-slate-900',
          'focus:radix-state-active:text-black',
        ],
        violet: [
          'text-violet-500',
          'radix-state-active:border-b-violet-700',
          'focus:radix-state-active:text-violet-700',
        ],
      },
    },
    defaultVariants: {
      tabVariant: 'violet',
    },
  },
);

export type Tab = {
  render: () => ReactNode;
} & Pick<TabsPrimitive.TabsTriggerProps, 'value' | 'title' | 'disabled'>;

export type TabsProps = {
  tabs: Tab[];
  contentStyle?: string;
  tabListStyle?: string;
} & Pick<
  TabsPrimitive.TabsProps,
  'defaultValue' | 'value' | 'onValueChange' | 'orientation' | 'activationMode'
> &
  VariantProps<typeof tabTriggerCss>;

export const Tabs = ({
  tabs,
  orientation = 'horizontal',
  tabListStyle,
  contentStyle,
  tabVariant = 'violet',
  ...props
}: TabsProps) => {
  return (
    <TabsPrimitive.Root
      className={cx('tabs', orientation === 'horizontal' ? 'flex flex-col' : 'flex')}
      orientation={orientation}
      {...props}
    >
      <TabsPrimitive.List
        className={cx(
          'flex w-full rounded-t-lg bg-white',
          'data-[orientation=vertical]:flex-col',
          'data-[orientation=vertical]:max-w-max',
          tabListStyle,
        )}
      >
        {tabs.map(({ title, value, disabled }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            disabled={disabled}
            className={cx(tabTriggerCss({ tabVariant }))}
          >
            <span className={cx('text-sm font-medium text-inherit')}>{title}</span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs.map(({ value, render }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className="rounded-b-lg bg-white"
        >
          <div className={cx('text-sm text-gray-700', contentStyle)}>{render?.()}</div>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
