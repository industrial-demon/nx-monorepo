import { observer } from 'mobx-react-lite'

import signin from '../../shared/design/assets/sign-in.cover.svg'
import {
  SignInForm,
  useSignInForm,
  useSignInMutation,
} from '../../features/sign-in-form'

export const SignInPage = observer(() => {
  const form = useSignInForm()
  const signIn = useSignInMutation()
  
  return (
    <div className="flex h-full px-20 py-[90px] bg-[#ECEEF0]">
      <div className="flex rounded-[30px] overflow-hidden">
        <img
          src={signin}
          alt="img"
          className="object-cover max-w-[50%] h-full w-auto"
        />
        <div className="w-full bg-white py-24 px-36 ">
          <SignInForm form={form} onSubmit={signIn.mutateAsync} />
        </div>
      </div>
    </div>
  )
})
