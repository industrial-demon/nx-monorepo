import * as zod from 'zod'

const siginShema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
  })

export { siginShema }  