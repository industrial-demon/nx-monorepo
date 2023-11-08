import { cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

const comboLiCss = cva(
  [
    'combo-option',
    'relative py-2 pl-3 pr-9',
    'text-gray-900',
    'cursor-default select-none',
    'transition ease-in-out delay-20',
    'hover:bg-indigo-500 hover:text-white',
  ],
  {
    variants: {
      disabled: {
        true: ['pointer-events-none text-slate-400'],
        false: [''],
      },
    },
  },
);

export interface Option extends Record<string, any> {
  value: string;
  label: string;
  disabled?: boolean;
  render?: (option: Pick<Option, 'value' | 'label' | 'disabled'>) => ReactNode;
}

export type ComboOptionProps = Option & {
  selected?: boolean;
  disabled?: boolean;
  onSelect?: (value: string) => void;
  renderOptionIcon?: () => ReactNode;
};

export const ComboOption = ({
  value,
  label = '',
  selected = false,
  disabled = false,
  onSelect,
  renderOptionIcon,
  render,
}: ComboOptionProps) => {
  const icon = renderOptionIcon?.() || (
    <CheckIcon width={20} height={20} fill="currentColor" className="text-inherit" />
  );

  return (
    <li
      className={comboLiCss({ disabled })}
      onClick={() => {
        onSelect?.(value);
      }}
      aria-selected={selected}
    >
      {render?.({ label, value, disabled }) || (
        <div className="flex items-center">
          <span className="ml-3 block truncate font-normal">{label}</span>
        </div>
      )}

      {selected && !disabled && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">{icon}</span>
      )}
    </li>
  );
};
