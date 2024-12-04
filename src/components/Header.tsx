import { useState } from "react"
import { BrightnessDeviceSettingIcon, DarkmodeIcon, LightmodeIcon, MenuIcon } from "../assets/icons/icons"

export const Header = () => {
    const [theme, setTheme] = useState('dark')
    const [show, setShow] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const setThemeMode = (mode: string) => {
        setTheme(mode)
        setShow(false)
    }

    return (
        <header className='bg-lightmode-main-bg dark:bg-darkmode-main-bg text-lightmode-prim-text dark:text-darkmode-prim-text flex items-center justify-between p-4 fill-current'>
            <div className='w-6 h-6'>
                <MenuIcon />
            </div>
            <h1 className='text-4xl font-bold'>
                GIDI
            </h1>
            <div className="flex items-center p-4 gap-1">
                <div className="relative">
                    <button className="p-2 w-10 h-10 bg-gray-200 rounded-full"
                        onClick={() => setShow(!show)} >
                        {theme === 'dark' ? (<DarkmodeIcon />)
                            : theme === 'light' ? (<LightmodeIcon />)
                                : <BrightnessDeviceSettingIcon />}
                    </button>
                    {show &&
                        <ul className="absolute right-0 top-full mt-2 bg-white border w-fit rounded-lg">
                            <li className="flex w-100 m-1 hover:cursor-pointer hover:bg-gray-200" onClick={() => setThemeMode('dark')}>
                                <button className='w-6 h-6'><DarkmodeIcon /></button>
                                <p className="ml-2 whitespace-nowrap">Mörkt läge</p>
                            </li>
                            <li className="flex w-100 m-1 hover:cursor-pointer hover:bg-gray-200" onClick={() => setThemeMode('light')}>
                                <button className='w-6 h-6'><LightmodeIcon /></button>
                                <p className="ml-2 whitespace-nowrap">Ljust läge</p>
                            </li>
                            <li className="flex w-100 m-1 hover:cursor-pointer hover:bg-gray-200" onClick={() => setThemeMode('system')}>
                                <button className='w-6 h-6'><BrightnessDeviceSettingIcon /></button>
                                <p className="ml-2 whitespace-nowrap">Systemets läge</p>
                            </li>
                        </ul>
                    }
                </div>
                <div className=''>logga {isLoggedIn ? 'ut' : 'in'}</div>
            </div>
        </header>
    )
}
