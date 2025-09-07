import { Link } from 'react-router'
import { MailIcon } from '../../../shared/assets/icons/MailIcon'
import { PhoneIcon } from '../../../shared/assets/icons/PhoneIcon'
import { MAIL, PHONE } from '../../../shared/consts'
import { CONTENT_NAV_MENU } from '../../../shared/consts'
import { LinkBtn } from '../../../shared/ui/LinkBtn'
import { Logo } from '../../../shared/ui/Logo'
import styles from './header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.info}>
                <Link to={'/'}>
                    <Logo />
                </Link>
                <div className={styles.headerPhone}>
                    <PhoneIcon styles={{ width: '20px' }} />
                    <a href={`tel:${PHONE}`}>{PHONE}</a>
                </div>
                <div>
                    <MailIcon />
                    <a href={`mailto:${MAIL}`}>{MAIL}</a>
                </div>
            </div>
            <nav className={styles.headerNav}>
                {CONTENT_NAV_MENU.map((el) => <LinkBtn link={el.link}>{el.title}</LinkBtn>)}
            </nav>
        </div>
    )
}