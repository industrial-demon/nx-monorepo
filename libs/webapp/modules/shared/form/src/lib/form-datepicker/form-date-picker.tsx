import { ChangeEvent, InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { cx } from 'class-variance-authority';
import { Label } from '../../components/Label';

export const FormDatePicker = ({
  name,
  onChange,
  label,
  ...props
}: {
  name: string;
  label?: string;
  onChange?: (e: ChangeEvent) => void;
} & InputHTMLAttributes<HTMLInputElement>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div className="form-field w-full">
            {label && <Label required={props.required} text={label} htmlFor={name} />}
            <input
              type="date"
              className={cx(
                'ring-1 ring-slate-300',
                'rounded-md',
                'outline-none',
                'h-10 w-full bg-white pl-2',
                'flex',
                'font-semibold',
                'disabled:bg-gray-100',
                'interactive-input',
              )}
              {...props}
              name={field.name}
              value={field.value}
              ref={field.ref}
              onChange={onChange || field.onChange}
            />

            {fieldState.error && (
              <span className="text-red text-sm">{fieldState.error.message}</span>
            )}
          </div>
        );
      }}
    />
  );
};
