import React from 'react'



export const metadata = {
    title: 'RC Portafolio',
    description: 'v1 with nextJs'
}

export default async function RootLayout( {children,} :{ children: React.ReactNode }){


    return (

        <html lang="en">
            <body className='flex flex-col min-h-screen text-gray-300 font-poppins bg-gradient-to-b from-cyan-950 to-neutral-950'>
              {children}
            </body>
        </html>
    );
    
}