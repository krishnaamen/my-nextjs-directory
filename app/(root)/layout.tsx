import React from 'react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='font-work-sans'>
            {children}
        </main>
    )
}

export default layout