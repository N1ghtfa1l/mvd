
import styles from './ContactPage.module.css'

export const ContactPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Телефоны доверия МВД России</div>
                <div className={styles.subTitle}>ТЕЛЕФОН ПОЛИЦИИ - 102</div>
                <div>
                    «Телефоны доверия», входящие в систему «горячей линии МВД России»,
                    предназначены для прямой круглосуточной телефонной связи в целях сообщения о преступлениях и иных правонарушениях, совершенных либо совершаемых
                    в реальном времени сотрудниками органов внутренних дел Российской Федерации.
                </div>
                <div>
                    <p>Абонентские номера «телефона доверия МВД России»:</p>
                    8 (800) 222-74-47 (бесплатный), 8 (495) 031-74-47.
                </div>


            </div>
            <div className={styles.wrapper}>
                <div className={styles.title}>Контакты</div>
                <div className={styles.subTitle}>СПРАВОЧНЫЙ ТЕЛЕФОН-АВТОИНФОРМАТОР: 8 (495) 031-04-02</div>
                <div>
                    Почтовый адрес для направления обращений в письменном виде и корреспонденции
                </div>
                <div>
                    119991, г. Донецк, ул. Житная, 16
                </div>


            </div>
        </div>
    )
}