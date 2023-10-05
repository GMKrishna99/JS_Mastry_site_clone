import React from 'react'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default layout