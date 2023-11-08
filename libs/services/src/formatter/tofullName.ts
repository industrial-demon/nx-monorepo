export const toFullNameFormat = (fistName?: string, lastName?: string) => {
  return [fistName || '', lastName || ''].join(' ').trim()
}
