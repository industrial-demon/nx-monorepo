import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@webapp/ui-kit'

export const FormCheckbox = ({
  name,
  checked,
  onChange,
  ...props
}: Omit<CheckboxProps, 'name'> & {
  name: string
  onChange?: (val: boolean) => void
}) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div className="form-field">
            <Checkbox
              {...props}
              id={field.name}
              name={field.name}
              checked={checked}
              ref={field.ref}
              onCheckedChange={(checked: boolean) => {
                onChange?.(checked) || field.onChange(checked)
              }}
            />

            {fieldState.error && (
              <span className="text-red text-sm">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )
      }}
    />
  )
}
