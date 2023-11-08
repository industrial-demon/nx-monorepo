import { forwardRef } from 'react';
import { defaultTheme, SingleValue } from 'react-select';
import Select from 'react-select';
import CSelect from 'react-select/dist/declarations/src/Select';
import {
  LoadIndicator,
  DropdownIndicator,
  IndicatorSeparator,
  NoOptionsMessage,
  OptionProps,
} from './elements';
import { customTheme } from './theme';

export type { OptionProps };

export type ReactSelectProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
  name?: string;
  label?: string;
  defaultValue?: OptionProps;
  defaultInputValue?: string;
  value?: OptionProps;
  inputValue?: string;
  options?: OptionProps[];
  onInputChange?: (inputValue: string) => void;
  onSelect: (option: SingleValue<OptionProps>) => void;
};

export const ReactSelect = forwardRef<CSelect<OptionProps>, ReactSelectProps>(
  (
    {
      isLoading,
      isDisabled,
      name,
      label,
      defaultValue,
      defaultInputValue,
      value,
      inputValue,
      options,
      onInputChange,
      onSelect,
    },
    ref,
  ) => {
    return (
      <label>
        {label && <div className="mb-1 text-sm font-medium text-slate-700">{label}</div>}
        <Select
          ref={ref}
          name={name}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable
          defaultInputValue={defaultInputValue}
          defaultValue={defaultValue}
          value={value}
          inputValue={inputValue}
          options={options}
          onChange={onSelect}
          onInputChange={onInputChange}
          loadingMessage={LoadIndicator}
          noOptionsMessage={NoOptionsMessage}
          theme={customTheme}
          components={{
            DropdownIndicator,
            IndicatorSeparator,
          }}
          styles={{
            control: baseStyes => ({
              ...baseStyes,
              height: '40px',
              borderRadius: '6px',
              boxShadow: 'none',
              borderColor: defaultTheme.colors.neutral20,
              ':hover': {
                borderColor: defaultTheme.colors.neutral20,
              },
            }),
          }}
        />
      </label>
    );
  },
);
