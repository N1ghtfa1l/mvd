
import { Outlet } from 'react-router'
import { Header } from '../../widgets/Header'
import style from './layout.module.css'
import { Footer } from '../../widgets/Footer'


export const Layout = () => {

    return (
        <>
            <div className={style.layout}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}