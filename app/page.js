import Image from 'next/image'
import styles from './page.module.css'
import LanguageCurrency from './components/LanguageCurrency'
import Logo from './components/Logo'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className='language--currency'>
      <Navbar />
    </div>
  )
}
