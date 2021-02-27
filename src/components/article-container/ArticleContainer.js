import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';

const ArticleContainerStyled = styled.article`
  @media screen and ${BREAKPOINTS.tablet} {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const ArticleContainer = ({ children }) => {
  return <ArticleContainerStyled>{children}</ArticleContainerStyled>;
};

export default ArticleContainer;
