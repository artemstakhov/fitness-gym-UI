import React from 'react';
import styles  from './Trainers.module.css';


const Trainers = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.profile}></div>
                <div className={styles.trainerInfo}>
                    <h2 className={styles.name}> АНДРIЙ БАТЬКОВИЧ</h2>
                    <h3 className={styles.specialization}>ТРЕНЕР БОЙОВИХ МИСТЕЦТВ ТА ФІТНЕСУ</h3>
                    <p className={styles.specializationDesc}>
                        Майстер спорту України з боксу. Неодноразовий призер і переможець змагань з боксу і фітнесу. 
                    </p>
                    <h2 className={styles.cv}>РЕЗЮМЕ</h2>
                    <p className={styles.specializationDesc}>
                        Життя пов'язане з спортом вже 24 роки.
                        Пропонує Вам: Бойові мистецтва, Силовий тренінг, Функціональний тренінг, Тренування: для зменшення ваги, для набору м'язової маси, для виділення рельєфу і формування фігури без нарощування м'язів, техніка підтримання досягнутих результатів.
                    </p>
                    <h2 className={styles.contacts}>КОНТАКТИ</h2>
                    <div className={styles.contactsWrapper}>
                        <h3 className={styles.contact}>andriy.batkovich@coach.bubblegym.ua</h3>
                        <h3 className={styles.contact}>andriy.b@instagram.com</h3>
                    </div>
                </div>
                <div className={styles.trainerList}>
                    <div className={styles.trainers}>
                        <div className={styles.trainer}>Андрій Батькович</div>
                        <div className={styles.trainer}>Віталій Батькович</div>
                        <div className={styles.trainer}>Олексій Батькович</div>
                        <div className={styles.trainer}>Валерій Батькович</div>
                        <div className={styles.trainer}>Андрій Батькович</div>
                        <div className={styles.trainer}>Андрій Батькович</div>
                        {/* <form action="" method='post'>
                            <input type='submit' id='1' className={styles.trainer} value='Андрій Батькович' />
                            <input type='submit' id='2' className={styles.trainer} value='Віталій Батькович' />
                            <input type='submit' id='3' className={styles.trainer} value='Олексій Батькович' />
                            <input type='submit' id='4' className={styles.trainer} value='Валерій Батькович' />
                            <input type='submit' id='5' className={styles.trainer} value='Андрій Батькович' />
                            <input type='submit' id='6' className={styles.trainer} value='Андрій Батькович' />
                        </form> */}
                    </div>
                </div>
            </div>
            <button className={styles.submit}>ОФОРМИТИ АБОНЕМЕНТ</button>
        </div>
    )
}


export default Trainers;