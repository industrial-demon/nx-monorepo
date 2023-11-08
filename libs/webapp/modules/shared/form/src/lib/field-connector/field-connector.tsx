import {
  useFormContext,
  Controller,
  UseFormReturn,
  UseControllerReturn,
  FieldValues,
  Path,
} from 'react-hook-form'

export const FieldConnector = <TFormValues extends FieldValues>({
  name,
  children,
}: {
  name: Path<TFormValues>
  children: ({
    form,
    control,
  }: {
    form: UseFormReturn<TFormValues>
    control: UseControllerReturn<TFormValues>
  }) => JSX.Element
}) => {
  const methods: UseFormReturn<TFormValues> = useFormContext<TFormValues>()

  return (
    <Controller
      name={name}
      render={(props: UseControllerReturn<TFormValues>) => {
        return children({ form: methods, control: props })
      }}
    />
  )
}
