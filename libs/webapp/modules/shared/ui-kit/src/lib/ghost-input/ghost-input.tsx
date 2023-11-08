import { cx } from 'class-variance-authority'
import { ForwardedRef, forwardRef, useId } from 'react'
import { match } from 'ts-pattern'

function GhostInputFn(
  {
    label,
    required,
    className,
    invalid,
    helpText,
    capitalized,
    ...inputProps
  }: JSX.IntrinsicElements['input'] & {
    label: string
    invalid?: boolean
    helpText?: string
    capitalized?: boolean
  },
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useId()

  return (
    <div className={cx(className, 'relative z-0')}>
      <input
        ref={ref}
        type="text"
        id={id}
        className={cx(
          match(invalid)
            .with(
              false,
              () => 'focus:grey-100 border-green-300 hover:border-green-60',
            )
            .with(
              true,
              () => 'focus:red-100 border-red-200 hover:border-red-400',
            )
            .with(
              undefined,
              () => 'focus:grey-100 border-[#CCD3D9] hover:border-grey-80',
            )
            .exhaustive(),
          'peer block w-full appearance-none border-0 border-b bg-transparent px-0 pt-3 pb-1 text-body-3-r focus:outline-none focus:ring-0',
          capitalized && 'capitalize',
          'text-[#2D3436]',
        )}
        placeholder=" "
        {...inputProps}
      />

      <label
        htmlFor={id}
        className={cx(
          'text-[#585858] opacity-80',
          'whitespace-nowrap',
          'absolute top-[calc(0.5rem+1px)] z-10 origin-[0] -translate-y-4 scale-75 transform text-body-3-r duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-4 peer-focus:scale-75',
        )}
      >
        {required ? `${label}*` : label}
      </label>

      {helpText && (
        <p className="mt-1 text-sm text-caption-1-r text-red-500">{helpText}</p>
      )}
    </div>
  )
}

export const GhostInput = forwardRef(GhostInputFn)
