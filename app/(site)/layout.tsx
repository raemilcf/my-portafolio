import { Navbar } from '@/models/Navbar';
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
    const navbarPages : Navbar[] = 
    [
        {
            _id:'1',
            _createdAt: new Date,
            title: 'about',
            slug: '',
            content: []               
        },
        {
            _id:'2',
            _createdAt: new Date,
            title: 'projects',
            slug: '',
            content: []               
        },
    ];

    return (

        <html lang="en">
            <body>
                {/* navigation var  */}
                <header>
                    <Link href='/'> Raemil logo</Link>
                    <div>
                        {navbarPages.map( (navbar) => (
                            <Link key={navbar._id} href={`/${navbar.slug}`}>
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