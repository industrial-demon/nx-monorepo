import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from 'react';
import { cva, cx } from 'class-variance-authority';

const inputClass = cva(
  [
    'input',
    'w-full h-10',
    'px-2',
    'rounded-md ring-1 ring-slate-300',
    'outline-none',
    'flex',
    'bg-white font-semibold',
    'placeholder:text-slate-500 placeholder:font-thin',
    'disabled:bg-gray-100 disabled:pointer-events-none',
    'focus:shadow-rounded-blue',
  ],
  {
    variants: {
      addonRight: {
        true: ['pr-[42px]'],
        false: [''],
      },
    },
  },
);

const addonClass = cva(['input-addon', 'absolute right-4 top-1/2 -translate-y-1/2 transform'], {
  variants: {
    addonRight: {
      true: [''],
      false: ['hidden'],
    },
  },
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  addonRight?: ReactNode;
};

export const Input = forwardRef(
  ({ name, className, addonRight, ...props }: InputProps, forwardRef: Ref<HTMLInputElement>) => {
    return (
      <div className={cx('relative flex', className, props.disabled && 'hover:cursor-not-allowed')}>
        <input
          autoComplete="off"
          type="text"
          className={inputClass({ addonRight: Boolean(addonRight) })}
          name={name}
          ref={forwardRef}
          {...props}
        />
        <div className={addonClass({ addonRight: Boolean(addonRight) })}>{addonRight}</div>
      </div>
    );
  },
);
