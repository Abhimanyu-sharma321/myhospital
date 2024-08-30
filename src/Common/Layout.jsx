import React from 'react'
import Index from './Header'
import Footer from './Footer/Footer'
const Layout = ({ children }) => {
    return (
        <div>
            {
                window.location.pathname === ("/") ? null : <Index />
            }
            {children}
            {
                window.location.pathname === ("/") ? null : <Footer />
            }
        </div>
    )
}

export default Layout