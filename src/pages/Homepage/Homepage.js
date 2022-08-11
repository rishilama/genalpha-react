import React from 'react';
import './Homepage.css';
import FreeTrialSection from '../../components/FreeTrialSection/FreeTrialSection'
import Hero from '../../components/Hero/Hero'
import ProfitSection from '../../components/ProfitSection/ProfitSection'
import SmallSection from '../../components/SmallSection/SmallSection'
import SmallSectionData from '../../dummy data/SmallSectionData';
import PerksData from '../../dummy data/PerksData';
import FixedWhatsappComp from '../../components/FixedWhatsappComp/FixedWhatsappComp';

function Homepage() {
  return (
    <div>
        <Hero />
        <SmallSection sectionData={SmallSectionData} />
        <ProfitSection profitData={PerksData} />
        <FreeTrialSection />
        <FixedWhatsappComp />
    </div>
  )
}

export default Homepage