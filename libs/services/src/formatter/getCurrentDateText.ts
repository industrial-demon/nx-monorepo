export const getCurrentDateText = () =>
  new Intl.DateTimeFormat('en-US').format(new Date()).replace(/\//g, '.')
