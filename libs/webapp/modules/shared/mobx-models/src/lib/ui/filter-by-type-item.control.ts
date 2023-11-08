import { ChecboxControl } from './checkbox.control'

export const createFilterTypeItemControl = ({
  name,
  id,
  title,
  checked,
}: {
  name: string
  id: string
  title: string
  checked?: boolean
}) => {
  return {
    name,
    id,
    title,
    checkboxControl: new ChecboxControl(checked),
  }
}
