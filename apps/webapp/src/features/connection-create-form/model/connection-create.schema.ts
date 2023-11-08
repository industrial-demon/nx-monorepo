import * as zod from 'zod'

const connectionCreateShema = zod.object({
    name: zod.string().nonempty(),
    username: zod.string().nonempty(),
    type: zod.string().nonempty(),
    description: zod.string().nonempty(),
    database: zod.string().nonempty(),
  }).required()

export { connectionCreateShema }  