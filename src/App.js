import React from 'react';
import ReactGA from 'react-ga';
import { Reset } from 'styled-reset';
import GlobalFonts from './assets/fonts/fonts';
import GlobalStyles from './global-styles/GlobalStyles';
import { AppHeader, ArticleContainer } from './components';
import { StepForm } from './features';
import FormValuesProvider from './context/FormValuesContext';

ReactGA.initialize('UA-146112791-2');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  window.onbeforeunload = function () {
    return window.alert('Your data will be lost!');
  };

  // useEffect(() => {
  //   if (form.step === 1) {
  //     ReactGA.pageview('/question-1');
  //   }
  //   if (form.step === 2) {
  //     ReactGA.pageview('/question-2');
  //   }
  // }, [form.step]);
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
