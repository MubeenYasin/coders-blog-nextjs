import { Node } from "typescript"

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
      'Category of ' + y.split('-').join(' ')
    )
  }
  return ' '
}

//Tinme delay for search bar typing words
 export const debounce = (fn: (quey:string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout

  const debounced = (...arg:any) => {
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this, arg)
    }, timeout)
  }
  return debounced
}
