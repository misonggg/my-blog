import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sans = Open_Sans({subsets: ['latin']})

export const metadata = {
  title: {
    default: '미송이의 블로그',
    template: '미송이의 블로그 | %s'
  },
  description: '미송이가 취미로 만든 블로그',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow p-3 md:px-6'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
