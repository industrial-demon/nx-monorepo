import { Signal } from 'solid-js'
import { createStore, reconcile, unwrap } from 'solid-js/store'
type Connection = { name: string; id: string }

const [store, setStore] = createStore<{
  meta: any
  result: Array<Connection>
}>({
  meta: '',
  result: [],
})

const getConnection = (id: string) => {
  return store.result.find(c => c.id === id) ?? null
}

const editConnection = (id: string, updates: any) => {
  setStore('result', connection => connection.id === id, 'name', updates)
}
function createConnectionSignal<T>(value: T): Signal<T> {
  const t = [
    () => store,
    (v: T) => {
      const unwrapped = unwrap(store)
      typeof v === 'function' && (v = v(unwrapped))
      setStore(reconcile(v))
      console.log(v)
      return store
    },
  ] as Signal<T>

  return t
}

export { store, editConnection, getConnection, createConnectionSignal }
