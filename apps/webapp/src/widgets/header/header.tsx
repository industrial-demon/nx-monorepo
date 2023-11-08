import { ReactNode } from 'react'
import { useTheme } from '../../shared/providers/theme-provider'
import { ThemeSwitcher, UserDropdown } from '@webapp/ui-kit'
import { observer } from 'mobx-react-lite'
import { useLogoutMutation } from '../../entities/session'

const imgSrc =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'

export const Header = observer(({
  navPanel,
  themeSwitcher,
}: {
  navPanel: ReactNode
  themeSwitcher: ReactNode
}) => {
  const { theme, toggleTheme } = useTheme()
  const login = useLogoutMutation()
  return (
    <header className="@container/header">
      <div className="h-[92px] flex flex-col shadow-headerBottom dark:bg-grey-90 gap-0  max-lg:text-red-600  border-b border-transparent dark:border-grey-60  @md/header:flex-row">
        <div className="bg-green-60 px-16 flex text-white text-4xl gap-3 items-center justify-center">
          <span className="font-light">TECH</span>
          <span className="font-semibold">ASAP</span>
        </div>

        <div className="flex-1 flex justify-between ml-[78px]">
          {navPanel}

          <div className="flex gap-5 items-center justify-between">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <div className="mr-4">
              <UserDropdown 
              src={imgSrc} userNane="Joe SDfdvsdfdfgvdfdfvgdfd"
              onLogoutClick={login.mutate}
              onMyAccountClick={()=> {console.log('my account')}}
              onSettingClick={()=> {console.log('settings')}}
               />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})
