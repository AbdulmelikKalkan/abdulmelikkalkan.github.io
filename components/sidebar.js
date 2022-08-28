import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineHome, HiHome } from 'react-icons/hi'
import { SiAboutdotme } from 'react-icons/si'
import { MdOutlineAlternateEmail, MdAlternateEmail } from 'react-icons/md'
import { WiDaySunny } from 'react-icons/wi'
import { useTheme } from 'next-themes'
import { Tooltip } from '@nextui-org/react'
import {
  FaAngleRight,
  FaAngleLeft,
  FaMoon,
  FaUser,
  FaRegUser
} from 'react-icons/fa'

const SideBar = () => {
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme()
  const [collapse, setCollapse] = useState(true)
  const [tooltip, showTooltip] = useState(true)
  useEffect(() => {
    setCollapse(true)
  }, [])
  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme !== 'light') {
      return (
        <button>
          <Tooltip
            content={'Light'}
            placement="right"
            color="invert"
            offset={26}
          >
            <WiDaySunny onClick={() => setTheme('light')} />
          </Tooltip>
          
        </button>
      )
    } else {
      return (
        <button>
          <Tooltip
            content={'Dark'}
            placement="right"
            color="invert"
            offset={26}
          >
            <FaMoon onClick={() => setTheme('dark')} />
          </Tooltip>
          
        </button>
      )
    }
  }

  const expandCollapse = () => {
    if (collapse) {
      return (
        <button>
          <Tooltip
            content={'expand'}
            placement="right"
            color="invert"
            offset={26}
          >
            <FaAngleRight onClick={() => setCollapse(false)} />
          </Tooltip>
          
        </button>
      )
    } else {
      return (
        <button>
          <Tooltip
            content={'collapse'}
            placement="right"
            color="invert"
            offset={26}
          >
            <FaAngleLeft onClick={() => setCollapse(true)} />
          </Tooltip>
          
        </button>
      )
    }
  }
  const logo = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme !== 'light') {
      return <Image src="/DarkLogo.PNG" alt='a dark logo' width={40} height={40} />
    } else {
      return <Image src="/LightLogo.PNG" alt='a light logo' width={40} height={40} />
    }
  }
  const home = () => {
    if (collapse) {
      return (
        <div className="flex">
          <Tooltip
            content={'Home'}
            placement="right"
            color="invert"
            offset={26}
          >
            <HiHome className="w-6 h-6" />
          </Tooltip>
        </div>
      )
    } else {
      return (
        <div className="flex">
          <HiOutlineHome className="w-5 h-5" />
          <span className="inline ml-1">Home</span>
        </div>
      )
    }
  }
  const about = () => {
    if (collapse) {
      return (
        <div className="flex">
          <Tooltip
            content={'About'}
            placement="right"
            color="invert"
            offset={26}
          >
            <FaUser className="w-6 h-6" />
          </Tooltip>
        </div>
      )
    } else {
      return (
        <div className="flex">
          <FaRegUser className="w-5 h-5" />
          <span className="inline ml-1">About</span>
        </div>
      )
    }
  }
  const contact = () => {
    if (collapse) {
      return (
        <div className="flex">
          <Tooltip
            content={'Contact'}
            placement="right"
            color="invert"
            offset={26}
          >
            <MdAlternateEmail className="w-6 h-6" />
          </Tooltip>
        </div>
      )
    } else {
      return (
        <div className="flex">
          <MdOutlineAlternateEmail className="w-5 h-5" />
          <span className="inline ml-1">Contact</span>
        </div>
      )
    }
  }
  const styles = {
    sidebarCollapse:
      'flex flex-col bar:fixed bar:top-0 bar:bottom-0 bar:left-0 sm:absolute justify-between items-center gap-2 p-0 bg-sbg w-16 h-full dark:bg-dsbg dark:border-r dark:border-gray-800',
    sidebarExpand:
      'flex flex-col bar:fixed bar:top-0 bar:bottom-0 bar:left-0 sm:absolute justify-between items-center gap-2 p-0 bg-sbg w-32 h-full dark:bg-dsbg dark:border-r dark:border-gray-800'
  }
  return (
    <nav
      id="sidebar"
      className={`${collapse ? styles.sidebarCollapse : styles.sidebarExpand}`}
    >
      <div className="transition ease-in-out hover:scale-125 mt-3 sm:hidden">
        {logo()}
      </div>
      <div className="grow flex items-center">
        <ul id="sidelist">
          <li className="transition ease-in-out hover:scale-125 tooltip rounded-xl p-2  text-slate-700 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-zinc-50">
            <Link href="/">{home()}</Link>
          </li>
          <li className="transition ease-in-out hover:scale-125 tooltip rounded-xl p-2 text-slate-700 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-zinc-50">
            <Link href="/about">{about()}</Link>
          </li>
          <li className="transition ease-in-out hover:scale-125 tooltip rounded-xl p-2 text-slate-700 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-zinc-50">
            <Link href="/contact">{contact()}</Link>
          </li>
        </ul>
      </div>
      <div className="transition ease-in-out hover:scale-125 sm:hidden">
        {expandCollapse()}
      </div>
      <div className="transition ease-in-out hover:scale-125 sm:hidden">
        {renderThemeChanger()}
      </div>
      <div className="transition ease-in-out hover:scale-125 mb-3 sm:hidden">
        <Image
          className="rounded-full"
          src="/profilfotopage.jpg"
          alt='a photo of profile'
          width={36}
          height={36}
        />
      </div>
    </nav>
  )
}
export default SideBar
