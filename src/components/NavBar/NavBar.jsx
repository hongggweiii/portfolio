import { useState } from 'react'
import './NavBar.css'

const navItems = [
    { name: 'about', href: '#about' },
    { name: 'experiences', href: '#experience' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
]

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className='navbar'>
                {navItems.map(item => (
                    <a key={item.href} href={item.href}>{item.name}</a>
                ))}
            </nav>

            <button
                className={`hamburger ${isOpen ? 'hamburger--open' : ''}`}
                onClick={() => setIsOpen(prev => !prev)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {isOpen && <div className='nav-overlay' onClick={() => setIsOpen(false)} />}

            <nav className={`nav-drawer ${isOpen ? 'nav-drawer--open' : ''}`}>
                {navItems.map((item, index) => (
                    <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        <span className='nav-drawer__index'>0{index + 1}</span>
                        {item.name}
                    </a>
                ))}
            </nav>
        </>
    )
}

export default NavBar;
