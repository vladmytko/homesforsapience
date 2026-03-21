import React from 'react'
import { Link } from 'react-router'


const Button = ({
  title,
  link
}) => {
  return (
    <Link to={link} className='bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300'>
      {title}
    </Link>
  )
}

export default Button