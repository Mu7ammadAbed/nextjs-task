import CategoriesCarousel from '../components/CategoriesCarousel'
import CardContainer from '../components/CardContainer'
import Header from '../components/Header'

import { useTranslation } from '../i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <div className='home--container'>
      <Header lng={lng} />
      <CategoriesCarousel lng={lng} />
      <CardContainer />
    </div>
    
  )
}


{/* <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <br />
      <Link href={`/${lng}/client-page`}>
        {t('to-client-page')}
      </Link>
      <Footer lng={lng}/>
    </> */}