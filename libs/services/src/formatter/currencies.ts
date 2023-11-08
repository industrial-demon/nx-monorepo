export const getCurrencySymbol = (currencyCode: string) => {
  switch (currencyCode) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    default:
      return ''
  }
}
