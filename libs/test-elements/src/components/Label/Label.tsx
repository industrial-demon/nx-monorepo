import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

const label = cva(['flex', 'font-medium text-[#7B7B7B]'], {
  variants: {
    inline: {
      true: ['w-auto'],
      false: ['w-full'],
    },
    required: {
      true: ['after:content-["*"] after:text-red-500'],
      false: [''],
    },
  },
});

type LabelProps = LabelPrimitive.LabelProps & {
  text: string;
} & VariantProps<typeof label>;

const Label = ({ text, className, required = false, inline = false, ...props }: LabelProps) => (
  <LabelPrimitive.Root {...props} className={label({ required, inline, className })}>
    {text}
  </LabelPrimitive.Root>
);

export { Label, type LabelProps };
