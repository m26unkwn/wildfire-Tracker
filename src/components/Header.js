import {Icon} from '@iconify/react';
import locationIcon from "@iconify/icons-mdi/fire-alert";


export const Header = () => {
    return (
        <header className="Header">
            <h1><Icon icon={locationIcon}/>Nasa WildFire  Tracker</h1>
        </header>
    )
}
