import React from 'react'
import Index from './Header'
import Footer from './Footer/Footer'
const Layout = ({ children }) => {
    return (
        <div>
            {
                window.location.pathname === ('/us') ? <Index /> : null
            }
            {children}
            {
                window.location.pathname === ("/us") ? <Footer /> : null
            }
        </div>
    )
}

export default Layout