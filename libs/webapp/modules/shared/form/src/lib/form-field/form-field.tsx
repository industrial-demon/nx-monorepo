import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { Input, InputProps } from '@webapp/ui-kit';
import { FieldWrapper, FieldWrapperPassThroughProps } from '../field-wrapper';

export type FormFieldProps<TFormValues extends FieldValues> = Omit<InputProps, 'name'> & {
  name: Path<TFormValues>;
  label?: string;
  control: UseFormReturn<TFormValues>["control"]
  onChange?: (val: string) => void;
} & FieldWrapperPassThroughProps;

export const FormField = <TFormValues extends FieldValues = FieldValues>({
  name,
  value,
  label,
  onChange,
  required,
  id,
  control,
  ...props
}: FormFieldProps<TFormValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FieldWrapper
            label={label}
            name={field.name}
            required={required}
            error={fieldState.error}
          >
            <Input
              {...props}
              id={id || field.name}
              name={field.name}
              value={value || field.value}
              ref={field.ref}
              onChange={onChange || field.onChange}
            />
          </FieldWrapper>
        );
      }}
    />
  );
};
