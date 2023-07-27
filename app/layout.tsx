import './globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import Navbar from '../components/core/Navbar'
import Footer from '@/components/core/Footer'


//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'URMO',
  description: "URMO's 11th Gen Website ",
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
