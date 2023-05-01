import { twMerge } from 'tailwind-merge'

export const FormField = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'w-fit p-1 mb-10 transition-all duration-1000 bg-teal-500 rounded-md focus:outline-none border-cyan-700',
        props.className
      )}
    >
      {children}
    </div>
  )
}

export const FormLabel = ({ children, ...props }) => {
  return (
    <label
      {...props}
      className={twMerge('mb-1 text-white mr-3', props.className)}
    >
      {children}
    </label>
  )
}

export const FormInput = ({ children, ...props }) => {
  return (
    <input {...props} className={twMerge('p-1 focus:outline-none rounded', props.className)}>
      {children}
    </input>
  )
}

export const FormTable = ({ children, ...props }) => {
  return (
    <table {...props} className={twMerge('w-full', props.className)}>
      {children}
    </table>
  )
}

export const FormTD = ({ children, ...props }) => {
  return (
    <th
      {...props}
      className={twMerge('border border-white w-1/4 rounded', props.className)}
    >
      {children}
    </th>
  )
}
