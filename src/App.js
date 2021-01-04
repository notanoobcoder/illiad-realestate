import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { FooterContainer } from './containers/footer'

import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection/InfoSection';

import { villaSlides } from './data/SliderData';
import { InfoData, InfoData2, InfoData3, InfoData4} from './data/InfoData';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggleDropdown={toggleDropdown} />
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />
      <Hero slides={villaSlides} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoData2} />
      <InfoSection {...InfoData3} />
      <InfoSection {...InfoData4} />
      <FooterContainer />
    </>

  );
}

export default App;