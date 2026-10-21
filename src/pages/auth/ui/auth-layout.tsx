import styles from './styles.module.css';
import Logo from './../../../shared/svg/lg.svg'
import iPhone15 from './../../../shared/png/iPhone_15_black.png';
import iPhone15Big from './../../../shared/png/iPhone_15_black_big.png';
import {LoginForm, RegistrationForm} from "../../../features/sign-in";
import {useState} from "react";
import type {SignInResponse} from "../model/sign-in.ts";

export const AuthLayout = () => {
    const [user, setUser] = useState<SignInResponse>({
        name: '',
        email: '',
        password: '',
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleForm = () => {
        const formId = isAuthenticated
            ? "login-form"
            : "registration-form";

        const form = document.querySelector<HTMLFormElement>(`#${formId}`);

        if (!form) return;

        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());

        console.log(userData);

        setUser((prev) => ({
            ...prev,
            ...userData,
        }));

        form.reset();
    };

    console.log('Hello',user)

    return (
        <div className={styles.wrapper_auth}>
        <div className={`${styles.sign_auth_container} ${styles.auth_part}`}>
            <div className={styles.content_form}>
                <img src={Logo} alt="Site logo" className={styles.logoImg}/>
                <h1>Expand your mind,<br /> reading <span style={{color: 'rgba(227, 227, 227, 0.5)'}}>a book</span> </h1>
            </div>
            {!isAuthenticated ? <RegistrationForm /> : <LoginForm />}
            <div className={styles.buttons_container}>
                <button className={styles.btn_sign} onClick={handleForm}>
                    {!isAuthenticated ? 'Registration' : 'Login'}
                </button>
                <button className={styles.btn_change}
                        onClick={() => setIsAuthenticated(!isAuthenticated)}>
                    {!isAuthenticated ? 'Already have an account?' : 'Don’t have an account?'}
                </button>
                {/*Don’t have an account?*/}
            </div>
        </div>
        <div className={`${styles.website_demo_container} ${styles.auth_part}`}>
            <picture>
                <source
                    media="(min-width: 1440px)"
                    srcSet={iPhone15Big}
                />

                <img src={iPhone15} alt="iPhone15" className={styles.iPhone_15}/>
            </picture>
        </div>
        </div>
    )
}