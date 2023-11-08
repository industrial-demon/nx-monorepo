export function convertUTCDateToLocalDate(date: Date) {
  const newDate = new Date(
    date.getTime() + date.getTimezoneOffset() * 60 * 1000
  )

  const offset = date.getTimezoneOffset() / 60
  const hours = date.getHours()

  newDate.setHours(hours - offset)

  const options: Record<string, string> = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23'
  }

  return newDate.toLocaleString('en-US', options)
}
