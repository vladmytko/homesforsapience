import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext';

const Header = ({
    title,
    subtitle,
    backgroundImage,
    showConsultationButton = true,
    showAboutButton = true
}) => {
    const { t } = useLanguage();
    const content = t.homePageHeader;
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
                        className='group relative overflow-hidden w-52.5 px-8 py-3 rounded bg-(--color-button-primary) text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:text-gray-900'
                    >
                        <>
                            <span className='absolute inset-0 bg-(--color-brand-secondary) scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                            <span className='relative z-10'>{content.button1}</span>
                        </>
                    </Link>
                )}

                {showAboutButton && (
                    <Link
                        to="/about"
                        className='group relative overflow-hidden w-52.5 px-8 py-3 rounded bg-(--color-brand-secondary) text-gray-900 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 hover:text-white'
                    >
                        <>
                            <span className='absolute inset-0 bg-(--color-button-primary) scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                            <span className='relative z-10'>{content.button2}</span>
                        </>
                    </Link>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Header