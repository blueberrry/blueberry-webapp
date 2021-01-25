import React from 'react';
import { Reset } from 'styled-reset';
import GlobalFonts from './assets/fonts/fonts';
import GlobalStyles from './global-styles/GlobalStyles';
import { ArticleContainer } from './components';
import { StepForm } from './features';
import FormValuesProvider from './context/FormValuesContext';

function App() {
  return (
    <>
      <Reset />
      <GlobalFonts />
      <GlobalStyles />
      <FormValuesProvider>
        <ArticleContainer>
          <StepForm />
        </ArticleContainer>
      </FormValuesProvider>
    </>
  );
}

export default App;
