import styles from './header.module.css'
// import { IoMenu } from "react-icons/io5";
// import { LightDarkModeSet } from '../lightDarkModeSet/LightDarkModeSet';

export const Header = () => {
    

    return (
        <header className="flex flex-row justify-center" /* className={`${styles.header}`} */>
            <div /* className={`btn ${styles.sidebar__menu}`} */>
                {/* <IoMenu /> */}
                <p>Hamburger dropdown menu</p>
            </div>
            <div /* className={`${styles.logo__container}` }*/>
                GIDI
            </div>
            <div /* className={`flex ${styles.header__options}`} */>
                {/* <LightDarkModeSet /> */}
                <p>darkmode loggo</p>
                <div className='btn'>logga in</div>
            </div>
        </header>
    )
}