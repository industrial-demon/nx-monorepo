import { observer } from 'mobx-react-lite'
import { Controller, UseFormReturn } from 'react-hook-form'

import { Button, GhostInput } from '@webapp/ui-kit'

import { SignupDto, Tokens } from '../../../shared/api/generated/auth'
import { SignInValues } from '../model/sign-in.values'

export const SignInForm = observer(
  ({
    form,
    onSubmit,
  }: {
    form: UseFormReturn<SignInValues>
    onSubmit: (dto: SignupDto) => Promise<Tokens>
  }) => {
    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <GhostInput
              label="Email address"
              invalid={field.value === '' ? undefined : fieldState.invalid}
              helpText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <GhostInput
              label="Password"
              {...field}
              invalid={fieldState.invalid}
              helpText={fieldState.error?.message}
            />
          )}
        />
        <Button filled type="submit" color="green" size="md" className="w-full">
          Sign in
        </Button>
      </form>
    )
  },
)
