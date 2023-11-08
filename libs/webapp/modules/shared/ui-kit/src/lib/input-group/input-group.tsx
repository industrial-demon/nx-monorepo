import {
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  Ref,
  Fragment,
  useMemo,
  InputHTMLAttributes,
} from 'react'
import { cx } from 'class-variance-authority'
import { getSlots } from '@webapp/utils'


type InputGroupProps = {
  inputRef?: Ref<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

type InputGroupValue = Omit<InputGroupProps, 'children'>

const InputGroupContext = createContext<InputGroupValue | null>(null)

const InputGroup = ({ children, ...props }: InputGroupProps) => {
  const [input, icon ] = getSlots([Input, Icon], children)

  if(!input) {
    throw Error("Input required component in children")
  }

  const { Comp, attributes } = useInputGroupElement(Boolean(false))

  return (
    <InputGroupContext.Provider value={props}>
      <Comp {...attributes}>
        <div
          className={cx(
            'input-container',
            'flex items-center relative overflow-hidden',
            'w-full h-[55px]',
            'rounded-lg border border-grey-20',
            'focus-within:border-green-60 ',
            'dark:border-transparent dark:focus-within:border-green-60',
            icon ? '[&>input]:pr-10' : '[&>input]:pr-5',
          )}
        >
          {input}
          {icon}
        </div>
      </Comp>
    </InputGroupContext.Provider>
  )
}

function useInputGroupElement(label: boolean) {
  return useMemo(() => {
    const attributes = {}
    const Comp = label ? 'div' : Fragment

    if (Comp === 'div') {
      Object.assign<object, HTMLAttributes<HTMLDivElement>>(attributes, {
        className: '',
      })
    }
    return { Comp, attributes }
  }, [label])
}

const useInputGroup = (subcomponentName: string) => {
  const ctx = useContext(InputGroupContext)

  if (!ctx) {
    throw new Error(
      `InputGroup.${subcomponentName} must be in scope with InputGroup`,
    )
  }

  return ctx
}

function Input() {
  const { inputRef, ...props } = useInputGroup(Input.name)
  return (
    <input
      {...props}
      ref={inputRef}
      className="w-full h-full focus:outline-none pl-[14px] dark:bg-grey-60"
    />
  )
}

function Icon({ icon }: { icon: ReactNode }) {
  useInputGroup(Icon.name)
  return (
    <span className="absolute top-1/2 right-5 transform -translate-y-1/2">
      {icon}
    </span>
  )
}
InputGroup.displayName = 'InputGroup'

InputGroup.Input = Input
InputGroup.Icon = Icon
export { InputGroup, InputGroupProps}
