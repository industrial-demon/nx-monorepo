import { FormHTMLAttributes, ReactNode } from 'react';
import { FormProvider, useForm, UseFormProps, FieldValues, UseFormReturn } from 'react-hook-form';

export type FormControllerProps<TFormValues extends FieldValues> = {
  formControl?: UseFormProps<TFormValues>;
  children?: ReactNode;
  render?: (form: UseFormReturn<TFormValues>) => ReactNode;
  onSubmit?: (values: TFormValues, form: UseFormReturn<TFormValues>) => void;
  methods?: UseFormReturn<TFormValues>;
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;

type UseFormControl<TFormValues extends FieldValues> = {
  formControl: UseFormProps<TFormValues>;
};

export const useFormControl = <TFormValues extends FieldValues>({
  formControl,
}: UseFormControl<TFormValues>) => {
  return useForm<TFormValues>(formControl);
};

export const FormController = <TFormValues extends FieldValues>({
  formControl = {},
  children,
  onSubmit,
  render,
  methods,
  ...props
}: FormControllerProps<TFormValues>) => {
  const formInstance = useForm<TFormValues>(formControl);
  const form = methods || formInstance;

  return (
    <FormProvider {...form}>
      <form
        {...(typeof onSubmit === 'function' && {
          onSubmit: form.handleSubmit(values => onSubmit(values, form)),
        })}
        {...props}
      >
        {render?.(form) || children}
      </form>
    </FormProvider>
  );
};
