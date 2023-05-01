import { twMerge } from 'tailwind-merge'
import { useLocation } from 'react-router-dom'

export const Button1 = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        `${
          props.disabled
            ? 'bg-white/30'
            : 'bg-gray-light hover:bg-primary hover:text-white'
        } rounded-md flex items-center justify-center text-base font-normal transition duration-300`,
        props.className
      )}
    >
      {children}
    </button>
  )
}

export const HeaderButton = ({ children, onClick, ...props }) => {
  const location = useLocation()
  const isCurrent = (props.pathname == location.pathname)

  return (
    <div className='p-1 mt-4 mr-10 rounded hover:shadow-lg hover:cursor-pointer active:scale-95'>
      <button
        onClick={onClick}
        className={twMerge('m-auto font-sans font-thin text-2xl text-center text-black', props.className)}
      >
        {children}
      </button>
      <hr className={`mx-auto mt-1 rounded ${isCurrent ? 'w-auto' : 'w-0'}`} />
    </div>
  )
}
