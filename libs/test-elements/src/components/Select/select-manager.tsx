import { forwardRef } from 'react';
import { Manager } from 'react-popper';

import { OnClickOutsideArea } from '../OnClickOutsideArea';

import { useSelectContext, SelectStateEnum } from './context';
import { SelectReference, SelectReferenceProps } from './select-reference';
import { SelectPopper, SelectPopperProps } from './select-popper';

export type SelectManagerProps = SelectReferenceProps &
  SelectPopperProps & {
    onCancel?: () => void;
  };

export const SelectManager = forwardRef<any, SelectManagerProps>(
  ({ options = [], onChange, onCancel, ...props }, forwardRef: any) => {
    const { state, setValue, inputRef, selectedOption, isCombobox } = useSelectContext();
    const hide = () => {
      setValue(SelectStateEnum.SHOW, false);
      onCancel?.();

      if (isCombobox) {
        inputRef.current.blur();
        if (selectedOption?.label !== state.inputValue) {
          setValue(SelectStateEnum.INPUT_VALUE, '');
        }
      }
    };

    return (
      <Manager>
        <OnClickOutsideArea handler={hide}>
          <div className="select-container relative">
            <SelectReference {...props} ref={forwardRef} />
            <SelectPopper options={options} onChange={onChange} />
          </div>
        </OnClickOutsideArea>
      </Manager>
    );
  },
);
