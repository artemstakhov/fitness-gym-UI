import React from 'react';
import styles from './Organizer.module.css';
import ArrowRight from './assets/ArrowRight';
import Loupe from './assets/Loupe';
import Select from './components/Select/Select';
import Table from './components/Table/Table';
const Organizer = ({ user }) => {

    const FNL = Array.from(user.firstName)[0];
    const LNL = Array.from(user.lastName)[0];

    return (
        <div className={styles.wrapper}>
            {/*  */}
            <div className={styles.header}>
                <div className={styles.accountWrapper}>
                    <div className={styles.avatar}>{FNL + LNL}</div>
                    <div className={styles.innerWrapper}>
                        <div>Панель управління</div>
                        <div>{`${user.firstName} ${user.lastName}`}</div>
                    </div>
                </div>
                <div className={styles.arrowWrapper}>
                    <ArrowRight />
                </div>
            </div>
            {/*  */}
            <div className={styles.options}>
                <div className={styles.searchWrapper}>
                    <div className={styles.loupeWrapper}>
                        <Loupe />
                    </div>
                    <input type="text" placeholder='Пошук' className={styles.searchInput} />
                </div>
                <div className={styles.filterWrapper}>
                    <Select />
                </div>
                <div className={styles.addUserWrapper}>
                    <button className={styles.addUserBtn}></button>
                </div>
            </div>
            <div className={styles.mainTable}>
                <Table />
            </div>
            {/* */}
            <div className={styles.footer}>

            </div>
        </div >
    )
}

export default Organizer;