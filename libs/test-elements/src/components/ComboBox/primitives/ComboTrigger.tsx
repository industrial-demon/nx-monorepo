import { InputHTMLAttributes, RefCallback, SyntheticEvent, useRef } from 'react';
import cn from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { LoadIndicator } from '../../LoadIndicator';
import { Option } from './ComboOption';
import { Separator } from '../../Separator';

const CommboTriggerStyle = {
  container: {
    base: ['inpit-container', 'w-full h-full', 'relative', 'font-semibold'].join(' '),
    after: [
      'after:content-[attr(data-label)]',
      'after:absolute after:top-0 after:left-3',
      'after:h-full w-full',
      'after:flex after:items-center',
    ].join(' '),
    disabled: 'pointer-events-none bg-gray-100',
  },
  input: {
    base: [
      'w-full h-full pl-3 pr-10',
      'flex bg-white',
      'ring-1 ring-slate-300 rounded-md',
      'text-left cursor-default',
      'transition duration-30 focus:ease-in',
      'disabled:bg-inherit',
    ].join(' '),
    placeholder: 'placeholder:font-thin placeholder:text-sm',
    focus: 'focus:outline-none focus:shadow-btn-violet',
  },
};

type InputTigger = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'ref'>;

export type ComboTriggerProps = {
  currentInput?: string;
  currentValue?: string;
  name?: string;
  id?: string;
  option?: Option;
  label?: string;
  eventSrc: 'input' | 'select';
  renderSelectIcon?: () => JSX.Element;
  onChangeInput?: (value: string) => void;
  onClickTrigger: () => void;
  forwardRef: RefCallback<HTMLInputElement | null>;
  loading?: boolean;
} & InputTigger;

export const ComboTrigger = ({
  currentInput,
  currentValue,

  name,
  label,
  onClickTrigger,
  renderSelectIcon,
  onChangeInput,
  onBlur,
  placeholder,
  disabled = false,
  loading = false,
  className,

  forwardRef,
}: ComboTriggerProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClickTrigger();
    inputRef.current?.focus();
  };

  const icon = renderSelectIcon?.() || <CaretDownIcon className="h-5 w-5" />;

  return (
    <div
      className={cn(
        CommboTriggerStyle.container.base,
        disabled && CommboTriggerStyle.container.disabled,
      )}
      data-label={label}
      data-selected={!!label}
      onClick={onClick}
    >
      <input
        name={name}
        value={label || currentInput}
        onBlur={onBlur}
        className={cn(
          CommboTriggerStyle.input.base,
          CommboTriggerStyle.input.focus,
          CommboTriggerStyle.input.placeholder,
          currentValue ? 'font-semibold' : 'font-medium ',
          className,
        )}
        placeholder={currentValue ? '' : placeholder}
        onChange={e => {
          onChangeInput?.(e.target.value);
        }}
        onKeyDown={e => e.code === 'Enter' && e.preventDefault()}
        role="presentation"
        autoComplete="off"
        disabled={disabled}
        ref={el => {
          inputRef.current = el;
          forwardRef?.(el);
        }}
        data-value={currentValue}
      />

      {loading && (
        <div className="pointer-events-none absolute inset-y-0 right-10 ml-3 flex items-center pr-2">
          <LoadIndicator />
        </div>
      )}

      <div className="absolute inset-y-0 right-9 ml-4 py-1">
        <Separator orientation="vertical" />
      </div>

      <span
        className="
      pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
      >
        {icon}
      </span>
    </div>
  );
};
