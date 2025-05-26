import React from 'react';
import './Hero.css';
import img01 from '../../assets/img01.png';
import img02 from '../../assets/img02.png';
import img03 from '../../assets/img03.png';
import img04 from '../../assets/img04.png';
import img11 from '../../assets/img11.png';

const Hero = () => {
    return (
        <section className="hero-container" id="home">
            <div className="hero-content">
                <h2>Hello People! </h2>
                <h2>I'm Tatheer Fathima</h2>
                <p>Final Year Computer Science Student
                </p>
                <p>Aspiring about Software Development and Machine Learning</p>
            </div>
           
           <div className="hero-img">
                <div>       
                    <img src = {img11} alt=""></img>
                </div>
           </div>
        </section>
    )
}
export default Hero;