import React from 'react';
import styles from './Tarifs.module.css';
import Tariff from './Components/Tariff';

const simpleDesc = {
    item1: ['./Components/Images/check-mark.png', "text"],
    item2: ['./Components/Images/check-mark.png', "text"],
    item3: ['./Components/Images/close-mark.png', "text"],
    item4: ['./Components/Images/close-mark.png', "text"],
}
const simplePlusDesc = {
    item1: ['./Components/Images/check-mark.png', "text"],
    item2: ['./Components/Images/check-mark.png', "text"],
    item3: ['./Components/Images/check-mark.png', "text"],
    item4: ['./Components/Images/close-mark.png', "text"],
}
const unlimitedDesc = {
    item1: ['./Components/Images/check-mark.png', "text"],
    item2: ['./Components/Images/check-mark.png', "text"],
    item3: ['./Components/Images/check-mark.png', "text"],
    item4: ['./Components/Images/check-mark.png', "text"],
}

const Tarrifs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>НАШІ ТАРИФИ</h1>
                </div>
                <div className={styles.tarrifs}>
                    <Tariff title='Базовий' descriptions={simpleDesc}/>  
                    <Tariff title='Базовий+' descriptions={simplePlusDesc}/>  
                    <Tariff title='Безліміт' descriptions={unlimitedDesc} />  
                </div>
            </div>
        </div>
    )
}

export default Tarrifs;