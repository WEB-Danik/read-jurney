import style from './style.module.css';
import Logo from './../../../shared/svg/lg_text.svg';
import {NavMenu} from "../../../shared/ui";
import {UserMenu} from "../../user-menu";


export const Header = () => {
  return (
      <header className={style.header_container}>
          <img src={Logo} alt="Logo"/>
          <NavMenu/>
          <UserMenu/>
      </header>
  );
}