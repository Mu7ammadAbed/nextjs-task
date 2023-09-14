import Navbar from './components/Navbar'
import CategoriesCarousel from './components/CategoriesCarousel'
import CardContainer from './components/CardContainer'
import HeaderCarousel from './components/HeaderCarousel'

export default function Home() {
  return (
    <div className='home--container'>
      <Navbar />
      <HeaderCarousel />
      <CategoriesCarousel />
      <CardContainer />
    </div>
  )
}
