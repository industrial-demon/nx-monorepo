import {
  createSignal,
  type Component,
  createResource,
  For,
  Show,
} from 'solid-js'
import { Router, Route, A as Link, Routes } from '@solidjs/router'

import styles from './App.module.css'
import { fetchConnectionList } from '../api/fetch-connections'

import {
  createConnectionSignal,
  editConnection,
} from '../store/connections.store'
import { SigInForm } from '../features/form/sign-in.form'



const getConnectionList = () => {
  const [source] = createResource(fetchConnectionList, {
    storage: createConnectionSignal,
  })

  return source
}


type Connection = { name: string; id: string }

const [count1, setCount1] = createSignal(1)
const [count2, setCount2] = createSignal(2)

const computed = () => {
  return count1() + count2()
}

const Button = () => {
  return (
    <button
      class="bg-slate-300 text-red-300"
      onClick={() => setCount1(value => value + 1)}
    >
      Increase
    </button>
  )
}

const DisplayName = ({ cn }: { cn: Connection }) => {
  return <span>{cn.name}</span>
}



const App: Component = () => {
  const source = getConnectionList()
  return (
    <div class={styles.App}>
      <header class={styles.header}>Learn Solid Now</header>
      <span>{computed()}</span>
      <Button />
      <Link href="/sign-in">Sign-In</Link>

      <Routes
        children={[
          <Route path='/sign-in' component={SigInForm} />,
        ]}
      />

      <Show when={source.state === 'ready'} fallback={<div>Loading...</div>}>
        <form>

          <ul class=" w-[300px]">
          <For each={source().result}>
            {connection => {
              return (
                <li class="flex flex-col">
                <DisplayName cn={connection} /> 
                 
                  <span>{connection.name}</span>
                  <hr></hr>
                  <input
                    value={connection.name}
                    onInput={e => {
                      editConnection(connection.id, e.target.value)
                    }}
                  
                  />
                </li>
              )
            }}
          </For>
        </ul>
        </form>
        
      </Show>
    </div>
  )
}

export default () => (
  <Router >
    <App />
  </Router>
)
