import {
  Controller,
  FieldValues,
  Path,
  UseFormReturn,
} from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from '../field-wrapper'
import { Select, SelectProps } from '@webapp/ui-kit'

export type FormSelectProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  control: UseFormReturn<TFormValues>['control']
  label?: string
  onChange?: (value: string) => void
} & Omit<FieldWrapperPassThroughProps, 'name' | 'onChange'> &
  Pick<SelectProps, 'options' | 'value'>

export const FormSelect = <TFormValues extends FieldValues>(
  {
    name,
    onChange,
    value,
    label,
    required,
    options,
    control
  }: FormSelectProps<TFormValues>,
  ref: any,
) => {

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
            <Select
              options={options}
              name={field.name}
              value={value || field.value}
              onValueChange={onChange || field.onChange}
            />
          </FieldWrapper>
        )
      }}
    />
  )
}
