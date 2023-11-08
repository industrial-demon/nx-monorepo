import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export function useFormWithContext(defaultValues: Record<string, unknown>) {
  const form = useForm<any>({
    defaultValues,
  });

  const renderFormWithContext = ({
    children,
    onSubmit,
    ...props
  }: {
    children: ReactNode;
    onSubmit?: (values: any) => void;
  }) => (
    <FormProvider {...form}>
      <form
        {...props}
        {...(typeof onSubmit === 'function' && {
          onSubmit: form.handleSubmit(onSubmit),
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
  return {
    ...form,
    renderFormWithContext,
  };
}
