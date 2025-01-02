import { useEffect, useRef, useState } from "react"
import { BrightnessDeviceSettingIcon, DarkmodeIcon, LightmodeIcon, MenuIcon } from "../../assets/icons/icons"

type Theme = 'dark' | 'light' | 'system'

export const Header = () => {
    const themes: Theme[] = ['dark', 'light', 'system']

    const [theme, setTheme] = useState<Theme>('dark')
    const [show, setShow] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const themeMenuRef = useRef<HTMLDivElement>(null)

    // changing theme without refreshing browser, and save to LS
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else if (theme === 'light') {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.removeItem('theme')
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                root.classList.add('dark')
            } else {
                root.classList.remove('dark')
            }
        }
    }, [theme]);
    
    // closes theme dropdown
    useEffect(() => {
        const closeThemeDropDown = (e: MouseEvent): void => {
            if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) setShow(false)
        }
        show ? document.addEventListener('mousedown', closeThemeDropDown) : document.removeEventListener('mousedown', closeThemeDropDown)
        return () => document.removeEventListener('mousedown', closeThemeDropDown)
    }, [show])

    // changes theme
    const setThemeMode = (mode: Theme) => {
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
                <div ref={themeMenuRef} className="relative">
                    <button className="p-2 w-10 h-10 bg-gray-200 rounded-full" onClick={()=>setShow(!show)}>
                        {theme === 'dark' ? (<DarkmodeIcon />)
                            : theme === 'light' ? (<LightmodeIcon />)
                                : <BrightnessDeviceSettingIcon />}
                    </button>
                    {show && (
                        <ul className="absolute right-0 top-full mt-2 bg-white border w-fit rounded-lg">
                            {themes.map((mode) => (
                                <li key={mode} className="flex w-100 m-1 hover:cursor-pointer hover:bg-gray-200" onClick={() => setThemeMode(mode)}>
                                    <button className='w-6 h-6'>
                                        {mode === 'dark' && <DarkmodeIcon />}
                                        {mode === 'light' && <LightmodeIcon />}
                                        {mode === 'system' && <BrightnessDeviceSettingIcon />}
                                    </button>
                                    <p className="ml-2 whitespace-nowrap">
                                        {mode === 'dark' && 'Mörkt läge'}
                                        {mode === 'light' && 'Ljust läge'}
                                        {mode === 'system' && 'Systemläge'}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className=''>logga {isLoggedIn ? 'ut' : 'in'}</div>
            </div>
        </header>
    )
}
