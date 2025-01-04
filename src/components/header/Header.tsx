import { useRef, useEffect, useState } from "react"
import { BrightnessDeviceSettingIcon, DarkmodeIcon, LightmodeIcon, MenuIcon } from "../../assets/icons/icons"
import { ThemeDropdown } from "./ThemeDropdown"
import { Theme } from "../../types/types"
import { Link } from "react-router-dom"

export const Header = () => {
    const [theme, setTheme] = useState<Theme>('dark')
    const [show, setShow] = useState(false)
    const [isLoggedIn/* , setIsLoggedIn */] = useState(false)

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

    return (
        <header className='bg-lightmode-main-bg dark:bg-darkmode-main-bg text-lightmode-prim-text dark:text-darkmode-prim-text flex items-center justify-between p-4 fill-current'>
            <div className='w-6 h-6'>
                <MenuIcon />
            </div>
            <h1 className='text-4xl font-bold'>
                <Link to={"/"}>GIDI</Link>
            </h1>
            <div className="flex items-center p-4 gap-1">
                <div ref={themeMenuRef} className="relative dark:text-lightmode-prim-text">
                    <button className="p-2 w-10 h-10 bg-gray-200 rounded-full" onClick={() => setShow(!show)}>
                        {theme === 'dark' ? (<DarkmodeIcon />)
                            : theme === 'light' ? (<LightmodeIcon />)
                                : <BrightnessDeviceSettingIcon />}
                    </button>
                    {show && <ThemeDropdown show={show} setShow={setShow} setTheme={setTheme} themeMenuRef={themeMenuRef} />}
                </div>
                <div className=''>
                   <Link to={'/login'}>logga {isLoggedIn ? 'ut' : 'in'}</Link> 
                    </div>
            </div>
        </header>
    )
}
