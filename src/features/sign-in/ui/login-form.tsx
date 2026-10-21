import {FormInput} from "../../../shared/ui";
import style from './styles.module.css'

export const LoginForm = () => {
  return (
      <form id='login-form' className={style.form_}>
          <FormInput name='email' type='text' text='Mail' placeholder='Your@email.com' />
          <FormInput name='password' type='text' text='Password' placeholder='Yourpasswordhere' />
      </form>
  );
}