import { DarkmodeIcon, LightmodeIcon, MenuIcon } from "../assets/icons/icons"

export const Header = () => {

    return (
        <header className='bg-lightmode-main-bg dark:bg-darkmode-main-bg flex flex-row justify-center'>
            <div className='text-lightmode-prim-text dark:text-darkmode-prim-text'>
                <MenuIcon />
            </div>
            <div className='text-lightmode-prim-text dark:text-darkmode-prim-text'>
                GIDI
            </div>
            <ul>
                <li><DarkmodeIcon /></li>
                <li><LightmodeIcon /></li>
                <li></li>

                <div className='text-lightmode-prim-text dark:text-darkmode-prim-text'>logga in</div>
            </ul>
        </header>
    )
}
