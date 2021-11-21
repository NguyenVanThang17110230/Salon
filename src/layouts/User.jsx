import Footer from 'containers/Footer'
import React from 'react'
import Header from '../containers/Header'

const User = ({children}) => {
    return (
        <>
            <Header />
            <main className="mb-5">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default User
