import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
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

const benchmarkAnimation = (props) => {
  return keyframes`
    0% {
      stroke-dashoffset: ${props.arcLength};
    }
    100% {
      stroke-dashoffset: ${props.arcFinalDashOffset};
    }
  `;
};

const BenchmarkStyled = styled.svg`
  width: 75%;
  margin: ${SIZES.spacerUltraSm}rem 0;
  > path.arc-path-bg {
    fill: transparent;
    stroke: ${COLOURS.lightGray};
    stroke-miterlimit: 10;
    stroke-width: 25px;
  }
  > path.arc-path {
    fill: transparent;
    stroke: ${COLOURS.primary};
    stroke-miterlimit: 10;
    stroke-width: 25px;
    stroke-dasharray: ${(props) => props.arcLength};
    stroke-dashoffset: ${(props) => props.arcLength};
  }
  > path.arc-path-animate {
    animation: ${benchmarkAnimation} 0.8s cubic-bezier(0.66, 0.46, 0.41, 1.43) forwards;
  }
`;

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    let currentRef = ref.current;
    if (ref.current) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const Indicators = ({ title, score, info }) => {
  // const benchmarkRef = useRef();
  // const benchmarkPathRef = useRef(null);
  // console.log(benchmarkPathRef.current.getTotalLength())
  // would be better if we could get pathLength as dynamic going forwards
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  const arcLength = 226.22650146484375;
  const arcIncrement = arcLength / 10;
  console.log('blah');
  const arcFinalDashOffset = {
    1: arcLength - arcIncrement,
    2: arcLength - arcIncrement * 2,
    3: arcLength - arcIncrement * 3,
    4: arcLength - arcIncrement * 4,
    5: arcLength - arcLength / 2,
    6: arcLength - arcIncrement * 6,
    7: arcLength - arcIncrement * 7,
    8: arcLength - arcIncrement * 8,
    9: arcLength - arcIncrement * 9,
    10: arcLength,
  };

  return (
    <IndicatorsStyled key={score}>
      <Badge colour={COLOURS.lighterGray}>
        <Text type='h5' colour={COLOURS.primary}>
          {title}
        </Text>
      </Badge>
      <BenchmarkStyled
        key={info}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 169 84.5'
        arcLength={arcLength}
        arcFinalDashOffset={arcFinalDashOffset[score]}
        ref={ref}>
        <path className='arc-path-bg' d='M28,88a72,72,0,0,1,144,0' transform='translate(-15.5 -3.5)' />
        <path
          className={onScreen ? `arc-path-animate arc-path` : `arc-path`}
          d='M28,88a72,72,0,0,1,144,0'
          transform='translate(-15.5 -3.5)'
        />
      </BenchmarkStyled>
      <Text type='bodySemiBold' colour={COLOURS.primary} className='small'>
        {info}
      </Text>
    </IndicatorsStyled>
  );
};

export default Indicators;

Indicators.defaultProps = {
  score: 5,
};

Indicators.propTypes = {
  score: PropTypes.number,
};
