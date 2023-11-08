export const toDatepickerValue = (date: Date) => {
  return new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date)
}
