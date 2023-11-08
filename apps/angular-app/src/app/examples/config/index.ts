export type UserData = {
  firstName: string
  lastName: string
  dateOfBirth: string
  framework: string
  frameworkVersion: string
  email: string
  hobby?: { name: string; duration: string }[]
  gender?: string
}

export interface Framework {
  value: string
  viewValue: string
}
export const frameworkVersions: Record<string, Array<Framework>> = {
  angular: [
    {
      value: '1.1.1',
      viewValue: 'v 1.1.1',
    },
    {
      value: '1.2.1',
      viewValue: 'v 1.2.1',
    },
    {
      value: '1.3.3',
      viewValue: 'v 1.3.3',
    },
  ],
  react: [
    {
      value: '2.1.2',
      viewValue: 'v 2.1.2',
    },
    {
      value: '3.2.4',
      viewValue: 'v 3.2.4',
    },
    {
      value: '4.3.1',
      viewValue: 'v 4.3.1',
    },
  ],
  vue: [
    {
      value: '3.3.1',
      viewValue: 'v 3.3.1',
    },
    {
      value: '5.2.1',
      viewValue: 'v 5.2.1',
    },
    {
      value: '5.1.3',
      viewValue: 'v 5.1.3',
    },
  ],
}
