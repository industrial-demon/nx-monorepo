import {
  Children,
  isValidElement,
  ReactNode,
  ReactElement,
  JSXElementConstructor,
  cloneElement,
} from 'react'

export function getSlots(
  elements: JSXElementConstructor<never>[],
  children: ReactNode,
): Array<ReactElement | null> {
  return elements.map(element => {
    let slot = null

    Children.forEach(children, child => {
      if (!isValidElement(child)) {
        return
      }

      if (child.type === element) {
        slot = cloneElement(child)
      }
    })
    return slot
  })
}
