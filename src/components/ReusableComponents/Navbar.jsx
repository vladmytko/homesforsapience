import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Consultation', path: '/consultation' },
    { label: 'Mentorship', path: '/mentorship' },
    { label: 'About', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/#Contact', neverActive: true },
  ]

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobileView(mobile)

      if (!mobile) {
        setShowMobileMenu(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  const closeMobileMenu = () => {
    setShowMobileMenu(false)
  }

  const baseLinkStyle = {
    textDecoration: 'none',
    color: '#F7F4EB',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'opacity 0.2s ease',
  }

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#31110F',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobileView ? 'flex-end' : 'space-between',
          }}
        >
          {!isMobileView && (
            <NavLink
              to='/'
              style={{
                textDecoration: 'none',
                color: '#F7F4EB',
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              Homes For Sapience
            </NavLink>
          )}

          {!isMobileView ? (
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '28px',
              }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    ...baseLinkStyle,
                    opacity: (isActive && !link.neverActive) ? 1 : 0.75,
                    fontWeight: (isActive && !link.neverActive) ? 700 : 500,
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          ) : (
            <button
              type='button'
              aria-label='Open mobile menu'
              aria-expanded={showMobileMenu}
              onClick={() => setShowMobileMenu(true)}
              style={{
                border: 'none',
                background: '#F7F4EB',
                color: '#000000',
                width: '48px',
                height: '48px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '22px',
                lineHeight: 1,
              }}
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {isMobileView && showMobileMenu && (
        <>
          <div
            onClick={closeMobileMenu}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              zIndex: 1001,
            }}
          />

          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 'min(82vw, 360px)',
              height: '100vh',
              backgroundColor: '#F7F4EB',
              zIndex: 1002,
              padding: '24px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.12)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px',
                }}
              >
                

                <button
                  type='button'
                  aria-label='Close mobile menu'
                  onClick={closeMobileMenu}
                  style={{
                    border: '1px solid #dcdcdc',
                    background: '#ffffff',
                    color: '#111111',
                    width: '44px',
                    height: '44px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    fontSize: '22px',
                    lineHeight: 1,
                    marginLeft: 250
                  }}
                >
                  ×
                </button>
              </div>

              <nav
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: '#111111',
                      fontSize: '22px',
                      fontWeight: (isActive && !link.neverActive) ? 700 : 500,
                    })}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <NavLink
              to='/contact'
              onClick={closeMobileMenu}
              style={{
                textDecoration: 'none',
                backgroundColor: '#31110F',
                color: '#ffffff',
                textAlign: 'center',
                padding: '16px 20px',
                borderRadius: '999px',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Book Consultation
            </NavLink>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar