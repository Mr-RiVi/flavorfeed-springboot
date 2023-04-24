import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

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

export const HeaderButton = ({ children, ...props }) => {
  const location = useLocation()
  const isCurrent = (props.pathname == location.pathname)

  return (
    <a href={props.pathname} className={"focus:outline-none active:outline-none" + (isCurrent && " pointer-events-none")}>
    <div className='p-1 mt-4 mr-10 rounded hover:shadow-lg hover:cursor-pointer active:scale-95'>
    <button
      className={twMerge('m-auto font-sans font-thin text-2xl text-center text-black pointer-events-none', props.className)}
    >
      {children}
    </button>
    <hr className={'mx-auto mt-1 rounded' + (isCurrent ? ' w-auto' : ' w-0')}/>
    </div>
    </a>
  )
}
