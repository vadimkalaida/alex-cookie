import React, { useRef } from 'react';
import OrderMainComponent from "./components/order/OrderMainComponent/OrderMainComponent";
import HeaderComponent from "./components/header/HeaderComponent"
import CookieFirstComponent from "./components/main/CookieFirstComponent"
import CompanyUseComponent from "./components/company/CompanyUseComponent"
import CookieInfoComponent from "./components/cookieInfo/CookieInfoComponent"
import PeopleComponent from "./components/people/PeopleComponent"
import InfoAboutComponent from "./components/infoAbout/InfoAboutComponent"
import CustomerSayComponent from "./components/customerSay/CustomerSayComponent"
import GetNowComponent from "./components/getNow/GetNowComponent"
import VideoComponent from "./components/video/VideoComponent"
import FaqComponent from "./components/faq/FaqComponent"
import FooterComponent from "./components/footer/FooterComponent"
import GrabComponent from "./components/grab/GrabComponent"

import './css/style.css'
import './css/reset.css'
import './css/normalize.css'


function App() {
  const mainRef = useRef();

  return (
    <main ref={ mainRef }>
      <HeaderComponent />
      <CookieFirstComponent />
      <CompanyUseComponent />
      <VideoComponent />
      <PeopleComponent />
      <InfoAboutComponent />
      <GrabComponent />
      <OrderMainComponent mainRef={ mainRef } />
      <CustomerSayComponent />
      <GetNowComponent />
      <CookieInfoComponent />
      <FaqComponent />
      <FooterComponent />
    </main>
  );
}

export default App;
