import { useState } from 'react';
import styles from './lightDarkModeSet.module.css'
// import { MdLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";

export const LightDarkModeSet = () => {
    const [isShow, setIsShow] = useState(false);

    const dropDown = () => {
        setIsShow(!isShow);
    }

    return (
        <div className={`${styles.LightDarkModeSet__container}`}>
            <button
                className={`btn ${styles.dark__light__mode__btn}`}
                onClick={() => dropDown()}>
                {/* <MdLightMode /> */}
            </button>
            {isShow &&
                <div className={`flex shadow ${styles.dark__light__mode__dropDown}`}>
                    <button className={`btn ${styles.theme__btn}`}>Ljust team</button>
                    <button className={`btn ${styles.theme__btn}`}>Mörkt tema</button>
                    <button className={`btn ${styles.theme__btn}`}>
                        {/* enhetens inställning ? <MdLightMode /> : <MdDarkMode />*/}Enhetens inställning
                    </button>
                </div>
            }
        </div>
    )
}
