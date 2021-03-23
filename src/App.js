import React from 'react';
import ReactGA from 'react-ga';
import { Reset } from 'styled-reset';
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
    </>
  );
}

export default App;
