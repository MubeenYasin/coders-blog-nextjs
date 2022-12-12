// To format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString('en-US', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  return date
}

// To convert a string into uppercase and split hyphen
export const splitHyphen = (x: string) => {
  if (typeof x === 'string') {
    const y = x.toUpperCase()
    return (
      'Category of '+ y.split('-').join(' ')
    )
  }
  return ' '
}
