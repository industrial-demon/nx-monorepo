import { components, DropdownIndicatorProps } from 'react-select';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { OptionProps } from './index';

export const DropdownIndicator: React.FC<DropdownIndicatorProps<OptionProps, false>> = props => (
  <components.DropdownIndicator {...props}>
    <CaretDownIcon
      style={{
        width: '20px',
        height: '20px',
        color: props.theme.colors.neutral90,
      }}
    />
  </components.DropdownIndicator>
);
