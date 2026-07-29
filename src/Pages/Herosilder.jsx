import React, { useEffect, useState } from 'react'
import "../Styles/Heroslide.css"

function Herosilder() {
    const images = [
        "/image01.jpg",
        "/image07.jpg",
        "/image6.jpg",
        "/image03.jpg",
    ];
    
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className='hero-container'>
            <img src={images[index]}
                className="hero-image" 
                alt="hero slide"
            />
            <div className="hero-content">
                <h1 className="hero-title">Paradise Hotel</h1>
                <p className="hero-paragraph">
                    Experience luxury and comfort in the heart of the city. 
                    Your perfect getaway awaits.
                </p>

                <button>Enquire now</button>
            </div>
        </div>
    )
}

export default Herosilder