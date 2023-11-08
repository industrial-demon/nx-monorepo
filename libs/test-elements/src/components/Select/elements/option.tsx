import clsx from 'clsx';
import { ReactNode } from 'react';

export type OptionType = {
  value: string;
  label: string;
};

export type OptionProps = OptionType & {
  active?: boolean;
  disabled?: boolean;
  onChangeValue?: (value: string) => void;
  renderOptionIcon?: () => ReactNode;
};

export const Option = ({
  onChangeValue,
  active = false,
  label = '',
  value,
  disabled,
  renderOptionIcon,
}: OptionProps) => {
  const icon = renderOptionIcon?.() || (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <li
      className={clsx(
        disabled && 'pointer-events-none text-slate-400',
        'delay-20 transition ease-in-out hover:bg-indigo-500 hover:text-white',
        'relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900',
      )}
      onClick={() => {
        onChangeValue?.(value);
      }}
    >
      <div className="flex items-center">
        <span className="ml-3 block truncate font-normal">{label}</span>
      </div>
      {active && <span className="absolute inset-y-0 right-0 flex items-center pr-4">{icon}</span>}
    </li>
  );
};
