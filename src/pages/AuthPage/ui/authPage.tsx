
import { useDispatch } from 'react-redux'
import styles from './authPage.module.css'
import { setUser } from '../slices/AuthPageSlice'

export const AuthPage = () => {

    const dispatch = useDispatch()

    const setUserRole = () => {
        dispatch(setUser())
        localStorage.setItem("role", "user")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Страница авторизации</div>
            <div className={styles.form}>
                <input type="text" placeholder='Логин' />
                <input type="password" placeholder='Пароль' />
                <button>Войти</button>
            </div>
            <button onClick={setUserRole}>Я гость</button>
        </div>
    )
}