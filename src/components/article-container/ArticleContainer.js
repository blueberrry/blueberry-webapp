import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';

const ArticleContainerStyled = styled.article`
  // height: 100vh;
  @media screen and ${BREAKPOINTS.tablet} {
    height: unset;
    max-width: 1100px;
    margin: 0 auto;
  }
`;

const ArticleContainer = ({ children }) => {
  return <ArticleContainerStyled>{children}</ArticleContainerStyled>;
};

export default ArticleContainer;
