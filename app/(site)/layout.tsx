import { getPages } from '@/src/sanity/api/navegation/navegation-api';
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'RC Portafolio',
    description: 'v1 with nextJs'
}

export default async function RootLayout({
    children,
}:{
    children: React.ReactNode
}){
    const navbarPages = await getPages();

    return (

        <html lang="en">
            <body className='flex flex-col min-h-screen text-gray-300 font-poppins bg-gradient-to-b from-cyan-950 to-neutral-950'>
                {/* navigation bar  */}
                <header className='sticky px-6 pt-2 flex justify-between'>
                    <Link href='/' className='flex flex-col items-center
                    bg-gradient-to-r from-pink-500 to-neutral-500 bg-clip-text text-transparent'>
                        {/* <Monitor color='white' size={40}/>  */}
                        <p className='text-base'>&#10094;&#47;&#10095;</p>
                        <p className='tracking-widest text-lg font-extrabold'>raemil</p>
                    
                    </Link>
                    <div className='flex  items-end gap-5 mb-1'>
                        {navbarPages.map( (navbar) => (
                            <Link className='hover:text-gray-500' key={navbar._id} href={`/#${navbar.slug}`} >
                                {navbar.title}
                            </Link>
                        ))}
                    </div>
                </header>

                {/* display all the content  */}
                <main> 
                    {children}
                </main>
               
               
            </body>
        </html>
    );
        

    

}