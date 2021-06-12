import React from 'react';
import ReactGA from 'react-ga';
import { Reset } from 'styled-reset';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import GlobalFonts from './assets/fonts/fonts';
import GlobalStyles from './global-styles/GlobalStyles';
import { AppHeader, ArticleContainer } from './components';
import { StepForm } from './features';
import FormValuesProvider from './context/FormValuesContext';

ReactGA.initialize('UA-146112791-2');

function App() {
  window.onbeforeunload = function () {
    return window.alert('Your data will be lost!');
  };

  return (
    <>
      <Reset />
      <GlobalFonts />
      <GlobalStyles />
      <FormValuesProvider>
        <AppHeader />
        <ArticleContainer>
          <StepForm />
        </ArticleContainer>
      </FormValuesProvider>
      {/* <MessengerCustomerChat
        pageId='103214621805331'
        appId='<APP_ID>'
        htmlRef='https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js'
      /> */}
    </>
  );
}

export default App;
