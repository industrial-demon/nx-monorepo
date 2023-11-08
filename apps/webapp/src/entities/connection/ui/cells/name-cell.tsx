import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { P, match } from "ts-pattern";
import { BusyIndicator } from "@webapp/ui-kit";

import { useUpdateConnection } from "../../api/useUpdateConnection";

export const NameCell = observer(({ value, id }: { value: string; id: string }) => {
    const [tag, setTag] =
      useState<keyof Pick<HTMLElementTagNameMap, 'div' | 'input'>>('div')
    const [editValue, setEditValue] = useState<string>(value)
  
    const inputRef = useRef<null | HTMLInputElement>(null)
    const update = useUpdateConnection()
  
    useEffect(() => {
      if (inputRef.current && tag === 'input') {
        inputRef.current.focus()
      }
    }, [inputRef, tag])
  
    return match([tag, update.isLoading])
      .with(['div', false], () => {
        return (
          <div
            onClick={e => {
              if (e.detail === 2) {
                setTag('input')
              }
            }}
          >
            {value}
          </div>
        )
      })
      .with(['input', false], () => {
        return (
          <input
            value={editValue}
            className="focus:outline-green-60 w-full px-2"
            onChange={e => setEditValue(e.target.value)}
            hidden={tag !== 'input'}
            onBlur={() => {
              setTag('div')
              if (value !== editValue) {
                update.mutate({
                  id,
                  dto: {
                    name: editValue,
                  },
                })
              }
            }}
            ref={inputRef}
          />
        )
      })
      .with([P.string, true], () => {
        return <BusyIndicator />
      })
      .exhaustive()
  })