import style from './styles.module.css';

export const NavMenu = () => {
    return (
        <nav>
            <ul className={style.menu_items}>
                <li className="menu_item">
                    Home
                </li>
                <li className="menu_item">
                    My library
                </li>
            </ul>
        </nav>
    )
}