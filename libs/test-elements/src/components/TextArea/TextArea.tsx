import { InputHTMLAttributes } from 'react';
import { Label, LabelProps } from '../Label';
import { cva, type VariantProps } from 'class-variance-authority';

const container = cva(['w-full', 'flex'], {
  variants: {
    orientation: {
      horizontal: ['data-[orientation=horizontal]:flex-row'],
      vertical: ['data-[orientation=vertical]:flex-col'],
    },
  },
});

const textarea = cva([
  'w-full p-2',
  'border border-gray-300',
  'resize-none outline-none',
  'focus:shadow-violet rounded',
]);

export type TextAreaProps = {
  rows?: number;
  label?: string;
} & Pick<InputHTMLAttributes<HTMLTextAreaElement>, 'id' | 'name'> &
  Pick<LabelProps, 'required'> &
  VariantProps<typeof container>;

export const TextArea = ({
  rows = 5,
  label,
  required,
  orientation = 'horizontal',
  ...props
}: TextAreaProps) => {
  return (
    <div data-orientation={orientation} className={container({ orientation })}>
      {label && <Label text={label} required={required} />}
      <textarea className={textarea()} rows={rows} {...props} />
    </div>
  );
};
