import React from 'react'


function Hero(props) {
    const { heroIMG,text } = props

return (
    <section id="HeroBanner">
        <div style={{backgroundImage:`url(${heroIMG})`}} className="relative hero-banner">
            <div className='absolute bottom-5 sm:bottom-10 bg-black/80 w-fit  ml-4 px-4'>
                <h2 className='text-xs sm:text-xl font-bold text-white'>{text}</h2>
            </div>
        </div>
    </section>
)}

export default Hero