import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
})

export const metadata = {
  title: 'Sunday Coffee | Your Bright Neighbourhood Café',
  description:
    'Sunday Coffee is a bright, welcoming neighbourhood café serving speciality coffee, fresh brunch, and homemade bakes. Come say hello.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
