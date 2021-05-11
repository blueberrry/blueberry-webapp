import React from 'react';
import styled from 'styled-components';
import movingCar from '../../../assets/images/svgs/moving-car.svg';
import { CardImage, CardHeader, CardMain, CardRange, CardSwitch, CardFooter, ToolTip } from '../../../components';
import ScrollLock from '../../../hocs/ScrollLock';
import { ToolTipMobileContainer } from '../step-2/Step2';

const Step3 = ({
  decrementFormStep,
  incrementFormStep,
  skip,
  step,
  milesType,
  milesDaily,
  milesDailySteps,
  milesDailyId,
  milesYearly,
  milesYearlySteps,
  milesYearlyId,
  handleChange,
}) => {
  // ReactGA.pageview('/question-3');
  const MilesRange = () => {
    if (milesType === 'daily')
      return (
        <CardRange
          rangeTitle={`Around ${milesDaily} per day`}
          steps={milesDailySteps}
          handleRangeChange={handleChange('milesDailyId')}
          rangeValue={milesDailyId}
        />
      );
    if (milesType === 'yearly')
      return (
        <CardRange
          rangeTitle={`Around ${milesYearly} per year`}
          steps={milesYearlySteps}
          handleRangeChange={handleChange('milesYearlyId')}
          rangeValue={milesYearlyId}
        />
      );
  };
  const switchItems = ['daily', 'yearly'];

  const toolTipMessage =
    'We’ll use your mileage to work out what range your car will need. This won’t affect your pricing.';

  return (
    <ScrollLock>
      <CardHeader headerText='How many miles do you drive?' />
      {/* <CardImage src={movingCar} alt={null} imgMaxWidth={{ maxWidth: '375px' }}></CardImage> */}
      <CardMain>
        <CardSwitch switchItems={switchItems} checkedItem={milesType} handleSwitchChange={handleChange('milesType')} />
        <MilesRange />
      </CardMain>
      <ToolTipMobileContainer className='tooltip-mobile'>
        <ToolTip message={toolTipMessage} />
      </ToolTipMobileContainer>
      <CardFooter
        decrementFormStep={decrementFormStep}
        incrementFormStep={incrementFormStep}
        skip={() => skip('milesDailyId', 'milesYearlyId')}
        step={step}
      />
    </ScrollLock>
  );
};

export default Step3;
