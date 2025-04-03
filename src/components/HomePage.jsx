import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Content from './Content/Content'
import SectionHeader from '../common/sectionHeader'
import SectionButton from '../common/SectionButton'

function HomePage() {
  return (
    <div className=' w-[1088px] '>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default HomePage