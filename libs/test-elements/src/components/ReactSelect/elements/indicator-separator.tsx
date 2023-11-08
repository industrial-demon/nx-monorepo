import { defaultTheme, IndicatorSeparatorProps } from 'react-select';
import { OptionProps } from './index';

const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  backgroundColor: defaultTheme.colors.neutral20,
  marginBottom: 0,
  marginTop: 0,
  width: 1,
};

export const IndicatorSeparator: React.FC<IndicatorSeparatorProps<OptionProps, false>> = ({
  innerProps,
}) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};
