
import { RutubeIcon } from '../../../shared/assets/icons/RutubeIcon'
import { TelegramIcon } from '../../../shared/assets/icons/TelegramIcon'
import { VkIcon } from '../../../shared/assets/icons/VkIcon'
import styles from './footer.module.css'


export const Footer = () => {

    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.footerContent}>
                    <img
                        className={styles.footerLogo}
                        src="https://xn--b1aew.xn--p1ai/media/mvd-2020/logo/mvd-emblem-monochrome.svg"
                        alt="logo"
                    />
                    <div className={styles.desc}>
                        Cайт Министерства внутренних дел Российской Федерации
                        <p>© 2025, МВД России</p>
                    </div>
                    <span>
                        Всегда на связи!
                    </span>
                    <span className={styles.footerNumber}>
                        102
                    </span>
                    <nav>
                        <a
                            href="https://rutube.ru/channel/23350159/"
                            target='_blank'
                        >
                            <RutubeIcon />
                        </a>
                        <a
                            href="https://vk.com/mvd"
                            target='_blank'
                        >
                            <VkIcon />
                        </a>
                        <a
                            href="https://t.me/mediamvd"
                            target='_blank'
                        >
                            <TelegramIcon />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}