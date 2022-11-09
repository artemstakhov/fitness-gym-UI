import React from 'react';
import styles from './Tariff.module.css';
import Mark from './Images/check-mark.png';

       

const Tariff = (props) => {


    const objectKeys = Object.keys(props.descriptions);
    const descriptions = objectKeys.map((item, key) => {
        // debugger;
        <div className="description">
            <img src={props.descriptions[item][0]} alt="" className={styles.mark}/>
            <p>{props.descriptions[item][1]}</p>
        </div>
    })
    
          
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>
                    {props.title}
                </h2>
            </div>
            {
                descriptions
            }
            
        </div>
    )
}

export default Tariff;