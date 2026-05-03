import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({
    title,
    subtitle,
    backgroundImage,
    showConsultationButton = true,
    showAboutButton = true
}) => {
  return (
    <div 
        className='h-[80vh] md-4 bg-cover bg-bottom flex items-center w-full overflow-hidden'
        style={{backgroundImage: `url(${backgroundImage})`}}
    >

        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-4xl sm:text-6xl leading-[1.2] md:leading-[1.4] inline-block font-medium pt-20 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]'>
                {title}
            </h2>

            {subtitle && (
                <h3 className='text-2xl md:text-4xl font inline-block mt-5 max-w-4xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]'>
                    {subtitle}        
                </h3>
            )}

            <div className='mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6'>
                {showConsultationButton && (
                    <Link
                        to="/consultation"
                        className='w-52.5 px-8 py-3 rounded bg-(--color-button-primary) hover:bg-(--color-button-primary-hover) transition-colors duration-300'
                    >
                        Book Consultation
                    </Link>
                )}

                {showAboutButton && (
                    <Link
                        to="/about"
                        className='w-52.5 px-8 py-3 rounded transition-colors duration-300 bg-(--color-brand-secondary) text-gray-900 font-medium'
                    >
                        About Us
                    </Link>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Header