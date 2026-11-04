import style from './style.module.css';

export const UserMenu = () => {
  return (
      <div className={style.user_menu_container}>
          <div className={style.user_info}>
              <h3 className={style.userIcon}>U</h3>
              User Name
          </div>
          <button className={style.logBtn}>Log out</button>
      </div>
  )
}