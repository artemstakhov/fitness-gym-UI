import React from 'react';
import styles from './Gallery.module.css';
import Img_1 from './Images/slide-1.png';
import Img_2 from './Images/slide-2.png';
import Img_3 from './Images/slide-3.png';
import Img_4 from './Images/slide-4.png';
import Img_5 from './Images/slide-5.png';
import Img_6 from './Images/slide-6.png';
import btnPrev from './Images/items/Vector_43.png';
import btnNext from './Images/items/Vector_42.png';
import './Slider.css';

const Gallery = () => {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    const titles = ['1','2','3','4','5'];
    let currentTitle = titles[index];
    const activeSlide = n => {
        for(let slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');
    }
    
    const activeDots = n => {
        for(let dot of dots) {
            dot.classList.remove('active');
        }
        dots[n].classList.add('active');
    }
    
    const prepareCurrentSlide = i =>{
        activeSlide(i);
        activeDots(i);
    }
    
    const nextSlide = () => {
        if(index == slides.length - 1) {
            index = 0;
            prepareCurrentSlide(index);

        }
        else {
            index++;
            prepareCurrentSlide(index);
            console.log(currentTitle);
        }
        
    }
    
    const prevSlide = () => {
        if(index == 0) {
            index = slides.length - 1;
            prepareCurrentSlide(index);
        }
        else {
            index--;
            prepareCurrentSlide(index);
        }
    }
    
    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurrentSlide(index);
        })
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <div className="slide active">
                    <img className='img' src={Img_1} alt=""/>
                </div>
                <div className="slide">
                    <img className='img' src={Img_2} alt=""/>
                </div>
                <div className="slide">
                    <img className='img' src={Img_3} alt=""/>
                </div>
                <div className="slide">
                    <img className='img' src={Img_4} alt=""/>
                </div>
                <div className="slide">
                    <img className='img' src={Img_5} alt=""/>
                </div>
                <div className="slide">
                    <img className='img' src={Img_6} alt=""/>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.mainTitle}>ГАЛЕРЕЯ</div>
                    <div className={styles.sliderItems}>
                        <div className={styles.arrowsWrapp}>
                            <div className={styles.btnPrev} id='btn-prev' onClick={prevSlide}><img src={btnPrev} alt="" /></div>
                            <div className={styles.imgName}>
                                НАЗВА КАРТИНКИ
                            </div>
                            <div className={styles.btnNext} id='btn-next' onClick={nextSlide}> <img src={btnNext} alt="" /> </div>
                        </div>
                        
                        <div className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus viverra arcu, ac mattis lorem accumsan quis. Etiam lobortis dolor sed enim sodales, nec tristique ligula mollis. Aenean erat sapien, sollicitudin nec blandit facilisis, malesuada non diam. Integer maximus sagittis leo, ut sagittis ipsum feugiat ut.
                        </div>
                        <div className={styles.dotsWrapper}>
                            <span className='dot active'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </div>

                    
                </div>
            </div> 
        </div>
    )
}


export default Gallery;