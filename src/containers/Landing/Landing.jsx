import React from 'react';
import styles from './Landing.module.css';
import MainFrame from './Components/MainFrame/MainFrame';
import Groups from './Components/Groups/Groups';
import Tarifs from './Components/Tariff/Tarifs';
import Gallery from './Components/Gallery/Gallery';
import Location from './Components/Location/Location';



const Landing = () => {
    return (
        <div className={styles.wrapper}>
            <MainFrame />
            <Gallery />
            <div className={styles.row}></div>
            <Groups />
            <Tarifs />
            <Location />
        </div>
    )
}

export default Landing;