import { forwardRef } from 'react';
import { SelectContextProvider, SelectCtxProps, SelectTypeEnum } from './context';
import { SelectManager, SelectManagerProps } from './select-manager';

export type SelectProps = Omit<SelectCtxProps, 'children'> & SelectManagerProps;

export const Select = forwardRef(
  ({ as, options, disabled, value, loading, defaultInputValue, ...props }: SelectProps, ref) => {
    return (
      <SelectContextProvider
        value={value}
        as={as}
        options={options}
        disabled={disabled}
        loading={loading}
        defaultInputValue={defaultInputValue}
      >
        <SelectManager {...props} options={options} ref={ref} />
      </SelectContextProvider>
    );
  },
);
export { SelectTypeEnum };
