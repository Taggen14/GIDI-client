import { Link } from "react-router-dom"
interface GlobalNavMenuProps {
    showGlobalNav: boolean,
    setShowGlobalNav: (value: boolean) => void
}

export const GlobalNavMenu = ({ /* showGlobalNav, setShowGlobalNav */ }: GlobalNavMenuProps) => {
    return (
        <ul>
            <li>
                <Link to={'/event'}>Event</Link>
            </li>
            <li>
                <Link to={'/kalender'}>Kalender</Link>
            </li>
        </ul>
    )
}
