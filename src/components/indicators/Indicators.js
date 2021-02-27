import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Image from '../image/Image';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Badge } from '../list-item/ListItem';
import TempBenchmarkSrc from '../../assets/images/listing-images/_default-benchmark.png';

const IndicatorsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Indicators = ({ title, score, info }) => {
  return (
    <IndicatorsStyled>
      <Badge colour={COLOURS.lightGray}>
        <Text h4>{title}</Text>
      </Badge>
      <Image src={TempBenchmarkSrc} />
      <Text>{info}</Text>
    </IndicatorsStyled>
  );
};

export default Indicators;
