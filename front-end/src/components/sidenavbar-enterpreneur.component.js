import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsArrowLeftShort, BsChevronDown, BsCalendar2DateFill, BsFileBarGraphFill, } from 'react-icons/bs'
import { AiFillEnvironment, AiFillHome } from 'react-icons/ai'
import { RiDashboardFill, RiTeamFill } from 'react-icons/ri'
import { FaMoneyCheckAlt, FaWarehouse } from 'react-icons/fa'
import { TbReport } from 'react-icons/tb'

const SideNavbar = () => {
  const [open, setOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [currentSubmenu, setCurrentSubmenu] = useState('')

  const Menus = [
    { title: 'HOME', icon: <AiFillHome />, src: '' },

    {
      title: 'DASHBOARD',
      icon: <RiTeamFill />,
      submenu: true,
      spacing: true,
      submenuItems: [
        { title: 'Add New Profiles', src: 'addMentorDetails' },
      ],
    },

    {
      title: 'Calendar',
      icon: <BsCalendar2DateFill />,
      spacing: true,
      src: 'calendar',
    },
    { 
      title: 'Report', 
      icon: <TbReport />,
      src: 'report',
    },
  ]

  return (
      <div
        className={`bg-dark-purple flex flex-col h-screen p-5 pt-8 
        ${open ? 'w-72' : 'w-20'} duration-300 z-10 fixed`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl 
                rounded-full absolute -right-3 top-9 border 
                border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment                     //mentor sign
            className={`bg-amber-300 text-4xl 
                    rounded cursor-pointer block float-left mr-2 duration-500 
                    ${open && 'rotate-[360deg]'}`}
          />
          <h1
            className={`text-black origin-left
                    font-medium text-2xl duration-300 
                    ${!open && 'scale-0'}`}
          >
            Reviewer
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              {
                //Check if message failed
                !menu.submenu ? (
                  <Link to={menu.src}>
                    <li
                      key={index}
                      className={`text-black text-sm flex 
                            items-center gap-x-4 cursor-pointor p-2
                            hover:bg-light-white rounded-md 
                            ${menu.spacing ? 'mt-9' : 'mt-2'}`}
                    >
                      <span className="text-2xl block float-left">
                        {menu.icon ? menu.icon : <RiDashboardFill />}
                      </span>
                      <span
                        className={`text-base font-medium flex-1 duration-200
                                ${!open && 'hidden'}`}
                      >
                        {menu.title}
                      </span>
                      {menu.submenu && open && (
                        <BsChevronDown
                          className={`${
                            submenuOpen &&
                            currentSubmenu === menu.title &&
                            'rotate-180'
                          }`}
                          onClick={() => {
                            setCurrentSubmenu(menu.title)
                            setSubmenuOpen(!submenuOpen)
                          }}
                        />
                      )}
                    </li>
                  </Link>
                ) : (
                  <li
                    key={index}
                    className={`text-black-300 text-sm flex 
                            items-center gap-x-4 cursor-pointor p-2
                            hover:bg-light-white rounded-md 
                            ${menu.spacing ? 'mt-9' : 'mt-2'}`}
                  >
                    <span className="text-2xl block float-left">
                      {menu.icon ? menu.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-200
                                ${!open && 'hidden'}`}
                    >
                      {menu.title}
                    </span>
                    {menu.submenu && open && (
                      <BsChevronDown
                        className={`${
                          submenuOpen &&
                          currentSubmenu === menu.title &&
                          'rotate-180'
                        }`}
                        onClick={() => {
                          setCurrentSubmenu(menu.title)
                          setSubmenuOpen(!submenuOpen)
                        }}
                      />
                    )}
                  </li>
                )
              }

              {menu.submenu &&
                submenuOpen &&
                currentSubmenu === menu.title &&
                open && (
                  <ul>
                    {menu.submenuItems.map((submenuItems, index) => (
                      <li
                        key={index}
                        className="text-black-300 text-sm flex 
                                    items-center gap-x-4 cursor-pointor p-2 px-5 //px-5 eken padding wenawa subitems
                                    hover:bg-light-white rounded-md"
                      >
                      
                        <Link to={submenuItems.src}>{submenuItems.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
            </>
          ))}
        </ul>
      </div>
  )
}

export default SideNavbar