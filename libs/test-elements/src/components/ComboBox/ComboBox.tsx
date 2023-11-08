import { forwardRef, ReactNode, Ref, RefCallback, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useUncontrolledProp } from 'uncontrollable';
import useOnClickOutside from 'use-onclickoutside';

import { useDelayedLoad } from './hooks/useDelayedLoader';
import usePopperToggle from './hooks/usePopperToggle';

import { ComboList, Option, ComboTrigger, ComboTriggerProps } from './primitives';

export enum SelectStateEnum {
  VALUE = 'value',
  DEFAULT_VALUE = 'defaultValue',
  SHOW = 'show',
}

type State = {
  value: string;
  defaultValue: string;
  show: boolean;
};

type ResetState = {
  [SelectStateEnum.DEFAULT_VALUE]?: State[SelectStateEnum.DEFAULT_VALUE];
  [SelectStateEnum.SHOW]?: State[SelectStateEnum.SHOW];
  [SelectStateEnum.VALUE]?: State[SelectStateEnum.VALUE];
};

export type ComboBoxProps = Pick<
  ComboTriggerProps,
  'id' | 'name' | 'value' | 'defaultValue' | 'disabled' | 'placeholder' | 'loading' | 'onBlur'
> & {
  inputValue?: string;
  defaultInputValue?: string;

  open?: boolean;
  defaultOpen?: boolean;

  onSelect?: (value: string) => void;
  onInputChange?: (value: string) => void;
  onToggle?: (open: boolean) => void;

  children?: ReactNode;
  options?: Array<Option>;

  reset?: ResetState;
};

export const ComboBox = forwardRef(
  (
    {
      value,
      defaultValue = '',

      open,
      defaultOpen = false,

      inputValue,
      defaultInputValue = '',

      onSelect,
      onInputChange,
      onToggle,
      onBlur,

      options = [],
      name,
      disabled,

      placeholder = 'Search...',
      loading,
    }: ComboBoxProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const selectRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLInputElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);

    const [eventSrc, setEventSrc] = useState<'select' | 'input'>('select');

    const [currentValue, selectValue] = useUncontrolledProp(value, defaultValue, onSelect);

    const [currentInput, changeInput] = useUncontrolledProp(inputValue, defaultInputValue);

    const [currentOpen, handleOpen] = useUncontrolledProp(open, defaultOpen, onToggle);

    const isLoading = useDelayedLoad({
      loading,
      open: currentOpen,
      delay: 500,
    });

    const toggle = usePopperToggle(currentOpen, handleOpen);

    const popper = usePopper(triggerRef.current, listRef.current, {
      modifiers: [
        {
          name: 'flip',
          options: {
            flipVariations: true,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 5],
          },
        },
      ],
    });

    const currentOption = options.find(option => option.value === currentValue);

    useOnClickOutside(selectRef, () => {
      if (!currentValue) {
        changeInput('');
      }
      setEventSrc('select');
      toggle.close();
    });

    const onChangeInput = (value: string) => {
      changeInput(value);
      selectValue('');
    };

    const onSelectValue = (value: string) => {
      selectValue(value);
      setEventSrc('select');
      toggle.close();
    };

    const onClickTrigger = () => {
      toggle.open();
      popper.update?.();
      setEventSrc('input');
    };

    const setTriggerRef = useCallback(
      (el: HTMLInputElement) => {
        triggerRef.current = el;
        (ref as RefCallback<HTMLInputElement>)?.(el);
      },
      [ref],
    );

    return (
      <div className="combo-container relative h-10" ref={selectRef}>
        <ComboTrigger
          currentInput={currentInput}
          onChangeInput={value => {
            onChangeInput(value);
            onInputChange?.(value);
          }}
          currentValue={currentValue as string}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          label={currentOption?.label}
          eventSrc={eventSrc}
          loading={isLoading}
          onClickTrigger={onClickTrigger}
          forwardRef={setTriggerRef}
          onBlur={onBlur}
        />

        <ComboList
          open={currentOpen}
          popper={popper}
          options={options}
          listRef={listRef}
          loading={isLoading}
          onSelect={onSelectValue}
          currentValue={currentValue as string}
        />
      </div>
    );
  },
);
