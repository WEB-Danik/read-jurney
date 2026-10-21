import type {Inputs} from "../model/forms.ts";
import style from './styles.module.css';

export const FormInput = ({ type, name, placeholder, text}: Inputs) => {
    return (
        <label  className={style.input_container}>
            {text}:
            <input type={type} name={name} placeholder={placeholder} />
        </label>
    )
}