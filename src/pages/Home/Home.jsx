import React from 'react'
import Navbar from '../../components/Navbar';
import Header from '../../components/Header/Header';
import Featured from '../../components/features/Features';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import PropertyList from '../../components/propertyList/PropertyList';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import './home.css'
const Home = () => {
  return (
    <div >
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle">Pilgrim Centers in Bharat</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home