import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/homeBanner/Banner'
import Mission from '../components/Mission'
import Functionalities from '../components/functionalities/Functionalities'
import Decouvrez from '../components/Decouvrez'
import Voir_tout from '../components/Voir_tout'
import Offres from '../components/offres/Offres'
import Evénements from '../components/evénements/Evénements'
import Founder from '../components/founder/Founder'
import Activites from '../components/activities/Activites'
import HomeContent from '../components/HomeContent'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
   <section className="container-fluid">
    <article className="container">
        
        <Banner/>
        <Mission/>
        <Functionalities/>
        <Decouvrez/>
        <Voir_tout/>
        <Offres/>
        <Evénements/>
        <Founder/>
        <Activites/>
        <HomeContent/>
        <Footer/>
    </article>
   </section>
  )
}

export default HomePage