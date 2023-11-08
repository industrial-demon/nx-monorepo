import clsx from 'clsx';
import { Option, OptionType } from './elements/option';
import { Popper } from 'react-popper';
import { useSelectContext, SelectStateEnum } from './context';

export type SelectPopperProps = {
  options?: OptionType[];
  onChange?: (value: string) => void;
};

export const SelectPopper = ({ options = [], onChange }: SelectPopperProps) => {
  const { state, setValue, isCombobox, delayedLoad } = useSelectContext();

  const onChangeValue = (value: string) => () => {
    setValue(SelectStateEnum.VALUE, value);
    setValue(SelectStateEnum.SHOW, false);

    onChange?.(value);

    if (isCombobox) {
      const inputVal = options?.find(option => option.value === value)?.label;
      setValue(SelectStateEnum.INPUT_VALUE, inputVal);
    }
  };

  const renderOptions = () => {
    if (isCombobox) {
      return options?.length > 0 && !delayedLoad ? (
        options.map((option, idx: number) => (
          <Option
            key={idx}
            value={option.value}
            label={option.label}
            active={option.value === state.value}
            onChangeValue={onChangeValue(option.value)}
          />
        ))
      ) : (
        <Option
          value={''}
          label={isCombobox && delayedLoad ? 'Loading...' : 'Options not found'}
          disabled
        />
      );
    }
    return options?.length > 0 ? (
      options.map((option, idx: number) => (
        <Option
          key={idx}
          value={option.value}
          label={option.label}
          active={option.value === state.value}
          onChangeValue={onChangeValue(option.value)}
        />
      ))
    ) : (
      <Option disabled label="Options not found" value={''} />
    );
  };

  return (
    <Popper
      placement="bottom-end"
      onFirstUpdate={state => state}
      modifiers={[
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
      ]}
    >
      {({ ref, style, placement }) => (
        <div
          ref={ref}
          style={{
            ...style,
          }}
          className={clsx(
            state.show ? 'flex' : 'hidden',
            'z-10 w-full rounded-md bg-white shadow-lg',
            'p-1',
          )}
          data-placement={placement}
        >
          <ul className="max-h-56 w-full overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {renderOptions()}
          </ul>
        </div>
      )}
    </Popper>
  );
};
