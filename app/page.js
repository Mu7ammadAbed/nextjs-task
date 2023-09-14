import Header from './components/Header'
import CategoriesCarousel from './components/CategoriesCarousel'
import CardContainer from './components/CardContainer'

export default function Home() {
  return (
    <div className='home--container'>
      <Header />
      <CategoriesCarousel />
      <CardContainer />
    </div>
  )
}
