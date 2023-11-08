import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import {cx} from 'class-variance-authority';
import { Label, LabelProps } from '../../../../../../../test-elements/src/components/Label';

export type FieldWrapperProps = {
  name: string;
  label?: string;
  className?: string;
  children: ReactNode;
  error?: FieldError | undefined;
  description?: string;
} & Omit<LabelProps, 'text'>;

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = ({
  label,
  className,
  error,
  children,
  required,
  name,
}: FieldWrapperProps) => {
  return (
    <div className={cx(className)}>
      {label && <Label required={required} text={label} htmlFor={name} />}
      <div className="mt-1">{children}</div>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};
