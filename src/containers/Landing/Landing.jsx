import React from 'react';
import styles from './Landing.module.css';
import MainFrame from './Components/MainFrame/MainFrame';

const Landing = () => {
    return (
        <div className={styles.wrapper}>
            <MainFrame/>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
        </div>
    )
}

export default Landing;