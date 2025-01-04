import { useState, useEffect, RefObject } from "react"
import { Link } from "react-router-dom"

interface ProfileDropdownProps {
    showProfileMenu: boolean
    setShowProfileMenu: (value: boolean) => void,
    profileMenuRef: RefObject<HTMLDivElement>
}

export const ProfileDropdown = ({ showProfileMenu, setShowProfileMenu, profileMenuRef }: ProfileDropdownProps) => {
    const [isLoggedIn/* , setIsLoggedIn */] = useState(false)

    // closes profile dropdown
    useEffect(() => {
        const closeThemeDropDown = (e: MouseEvent): void => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) setShowProfileMenu(false)
        }
        showProfileMenu ? document.addEventListener('mousedown', closeThemeDropDown) : document.removeEventListener('mousedown', closeThemeDropDown)
        return () => document.removeEventListener('mousedown', closeThemeDropDown)
    }, [showProfileMenu])

    return (
        <div className="absolute flex flex-col whitespace-nowrap p-1 right-0 top-full mt-2 bg-white border rounded-lg dark:text-lightmode-prim-text">
            <button className='p-1 hover:cursor-pointer hover:bg-gray-200 hover:rounded-lg' onClick={() => setShowProfileMenu(false)}>
                <Link to={'/login'}>
                    logga {isLoggedIn ? 'ut' : 'in'}
                </Link></button>
            {isLoggedIn && (
                <button className='p-1 hover:cursor-pointer hover:bg-gray-200 hover:rounded-lg' onClick={() => setShowProfileMenu(false)}>
                    <Link to={'/profil'}>
                        Min profil
                    </Link>
                </button>
            )}
            <button className='p-1 hover:cursor-pointer hover:bg-gray-200 hover:rounded-lg' onClick={() => setShowProfileMenu(false)}>
                <Link to={'/registrera'}>
                    Skapa konto
                </Link>
            </button>
        </div>
    )
}
