import {
  createContext,
  MutableRefObject,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { OptionType } from '../elements/option';
import { useDelayedLoad } from './useDelayedLoader';

const SelectContext = createContext<null | any>(null);

export enum SelectStateEnum {
  VALUE = 'value',
  INPUT_VALUE = 'inputValue',
  SHOW = 'show',
}

export enum SelectTypeEnum {
  SELECT = 'SELECT',
  COMBOBOX = 'COMBOBOX',
}

type State = {
  value: string;
  inputValue: string;
  show: boolean;
};

type ResetState = {
  [SelectStateEnum.INPUT_VALUE]?: State[SelectStateEnum.INPUT_VALUE];
  [SelectStateEnum.SHOW]?: State[SelectStateEnum.SHOW];
  [SelectStateEnum.VALUE]?: State[SelectStateEnum.VALUE];
};

export type SelectCtxProps = {
  children?: ReactNode;
  options?: OptionType[];
  as?: SelectTypeEnum;
  disabled?: boolean;
  value?: string;
  loading?: boolean;
  reset?: ResetState;
  defaultInputValue?: string;
};

export const SelectContextProvider = ({
  as = SelectTypeEnum.SELECT,
  value = '',
  disabled = false,
  loading,
  options,
  children,
  defaultInputValue,
}: SelectCtxProps) => {
  const [state, setState] = useState<State>({
    value,
    inputValue: defaultInputValue || '',
    show: false,
  });

  const delayedLoad = useDelayedLoad({ loading, open: state.show });

  const isCombobox = as === SelectTypeEnum.COMBOBOX;

  const referenceRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const setValue = useCallback(
    (key: SelectStateEnum, value: any) => setState((state: State) => ({ ...state, [key]: value })),
    [],
  );

  const selectedOption = useMemo(
    () => options?.find((option: OptionType) => option.value === state.value),
    [options, state.value],
  );

  if (value !== state.value) {
    setValue(SelectStateEnum.VALUE, value);
    isCombobox && setValue(SelectStateEnum.INPUT_VALUE, selectedOption?.label || '');
  }

  const values = useMemo(
    () => ({
      state,
      setValue,
      disabled,
      selectedOption,
      isCombobox,
      referenceRef,
      inputRef,
      delayedLoad,
    }),
    [disabled, isCombobox, selectedOption, setValue, state, delayedLoad],
  );

  return <SelectContext.Provider value={values}>{children}</SelectContext.Provider>;
};

export const useSelectContext = () => {
  return useContext(SelectContext) as {
    state: State;
    setValue: any;
    options: any[];
    selectedOption: OptionType;
    isCombobox: boolean;
    disabled: boolean;
    delayedLoad: boolean;
    referenceRef: MutableRefObject<HTMLButtonElement>;
    inputRef: MutableRefObject<HTMLInputElement>;
  };
};
