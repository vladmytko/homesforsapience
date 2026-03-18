import React from 'react'

const Button = ({
  title
}) => {
  return (
    <button className='bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:opacity-90 transition'>
      {title}
    </button>
  )
}

export default Button