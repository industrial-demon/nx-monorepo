import {
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  RefCallback,
  SyntheticEvent,
} from 'react';
import clsx from 'clsx';
import { Reference } from 'react-popper';
import { useSelectContext, SelectStateEnum } from './context';
import { ComboInput, ComboInputProps } from './elements';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classnames from 'classnames';
import { LoadIndicator } from '../LoadIndicator';

const focusStyle = clsx('focus:outline-none', 'focus:shadow-btn-violet');
const defaultStyle = 'outline-none ring-1 ring-slate-300';
const TriggerStyle =
  'transition transition-all items-center font-semibold relative w-full bg-white rounded-md  text-left cursor-default';

type ButtonTtigger = Omit<InputHTMLAttributes<HTMLButtonElement>, 'onChange'>;

export type SelectReferenceProps = {
  name?: string;
  disabled?: boolean;
  id?: string;
  renderSelectIcon?: () => JSX.Element;
} & Omit<ComboInputProps, 'disabled'> &
  ButtonTtigger;

export const SelectReference = forwardRef(
  (
    {
      renderSelectIcon,
      onSearch,
      comboInputSubComponent,
      className,
      ...props
    }: SelectReferenceProps,
    forwardRef,
  ) => {
    const { setValue, selectedOption, isCombobox, disabled, referenceRef, inputRef, delayedLoad } =
      useSelectContext();

    const onClickTrigger = (e: SyntheticEvent) => {
      e.preventDefault();

      setValue(SelectStateEnum.SHOW, true);
      if (referenceRef.current === document.activeElement && isCombobox) {
        inputRef.current.focus();
      }
    };
    const icon = renderSelectIcon?.() || <CaretDownIcon className="h-5 w-5" />;

    const defaultView = isCombobox ? (
      <ComboInput onSearch={onSearch} comboInputSubComponent={comboInputSubComponent} />
    ) : (
      <span className="flex items-center">
        <span className="ml-1 block truncate">{selectedOption?.label}</span>
      </span>
    );

    return (
      <Reference>
        {({ ref }) => {
          return (
            <div
              className={classnames(
                'select-trigger relative',
                disabled && 'pointer-events-none bg-gray-100',
              )}
            >
              <div className=" min-h-4">
                <button
                  {...props}
                  ref={(node: HTMLButtonElement) => {
                    if (forwardRef) {
                      (forwardRef as MutableRefObject<HTMLButtonElement>).current = node;
                    }
                    (ref as RefCallback<HTMLButtonElement>)(node);
                    referenceRef.current = node;
                  }}
                  disabled={disabled}
                  className={clsx(
                    'h-10',
                    'flex',
                    'disabled:bg-gray-100',
                    'disabled:pointer-events-none',
                    'overflow-hidden',
                    !isCombobox && 'py-3 pl-3 pr-10',
                    TriggerStyle,
                    defaultStyle,
                    focusStyle,
                    className,
                  )}
                  type="button"
                  onClick={onClickTrigger}
                >
                  {defaultView}
                  {delayedLoad && <LoadIndicator />}
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    {icon}
                  </span>
                </button>
              </div>
            </div>
          );
        }}
      </Reference>
    );
  },
);
