import { ChangeEvent, ReactNode } from 'react';
import { useSelectContext, SelectStateEnum } from '../context';
import { LoadIndicator } from './load-indicator';
import classnames from 'classnames';

export type ComboInputProps = {
  comboInputSubComponent?: ReactNode;
  onSearch?: (value: string) => void;
};

export const ComboInput = ({ comboInputSubComponent, onSearch }: ComboInputProps) => {
  const { state, setValue, inputRef, delayedLoad, disabled } = useSelectContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (delayedLoad) return;
    setValue(SelectStateEnum.INPUT_VALUE, e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className={classnames('relative flex h-full w-full')}>
      <div className="relative mr-10 flex w-full flex-col justify-center  border-r border-slate-300">
        <input
          ref={inputRef}
          className={classnames(
            'pointer-events-auto',
            'h-full outline-none',
            'pl-2 pr-10',
            'transition duration-150 focus:ease-in',
            disabled && 'pointer-events-none bg-gray-100 text-transparent',
            delayedLoad && 'text-transparent opacity-0',
          )}
          // disabled={showSpinner}
          type="text"
          value={state.inputValue}
          role="presentation"
          autoComplete="off"
          onChange={onChange}
          onKeyDown={(e: any) => e.code === 'Enter' && e.preventDefault()}
          onClick={e => {
            e.preventDefault();
          }}
        />
        <div className="absolute right-1">{delayedLoad && <LoadIndicator />}</div>
      </div>

      <div className="absolute">{comboInputSubComponent}</div>
    </div>
  );
};
