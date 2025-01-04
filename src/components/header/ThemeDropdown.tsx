import { RefObject, useEffect } from "react"
import { BrightnessDeviceSettingIcon, DarkmodeIcon, LightmodeIcon } from "../../assets/icons/icons"
import { Theme } from "../../types/types"

interface ThemeDropdownProps {
    setTheme: (value: Theme) => void
    show: boolean,
    setShow: (value: boolean) => void,
    themeMenuRef: RefObject<HTMLDivElement>
}

export const ThemeDropdown = ({ setTheme, show, setShow, themeMenuRef }: ThemeDropdownProps) => {
    const themes: Theme[] = ['dark', 'light', 'system']

    // closes theme dropdown
    useEffect(() => {
        const closeThemeDropDown = (e: MouseEvent): void => {
            if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) setShow(false)
        }
        show ? document.addEventListener('mousedown', closeThemeDropDown) : document.removeEventListener('mousedown', closeThemeDropDown)
        return () => document.removeEventListener('mousedown', closeThemeDropDown)
    }, [show])

    // changes theme
    const changeThemeMode = (mode: Theme) => {
        setTheme(mode)
        setShow(false)
    }

    return (
        <ul className="absolute right-0 top-full p-1 mt-2 bg-white border w-fit rounded-lg">
            {themes.map((mode) => (
                <li key={mode} className="flex w-100 hover:cursor-pointer hover:bg-gray-200 p-1 hover:rounded-lg" onClick={() => changeThemeMode(mode)}>
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
    )
}
