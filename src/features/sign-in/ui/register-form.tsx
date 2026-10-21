import {FormInput} from "../../../shared/ui";
import style from './styles.module.css';

export const RegistrationForm = () => {

  return (
      <form id="registration-form" className={style.form_}>
          <FormInput
              name='name'
              type='text'
              text='Name'
              placeholder='Ilona Ratushniak'
          />
          <FormInput
              name='email'
              type='text'
              text='Mail'
              placeholder='Your@email.com'
          />
          <FormInput
              name='password'
              type='text'
              text='Password'
              placeholder='Yourpasswordhere'
          />
      </form>
  )
};