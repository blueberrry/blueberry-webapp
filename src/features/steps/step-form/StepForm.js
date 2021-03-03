import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormValuesContext } from '../../../context/FormValuesContext';
import FormLogger from '../../../components/FormLogger';
import Step1 from '../step-1/Step1';
import Step2 from '../step-2/Step2';
import Step3 from '../step-3/Step3';
import Step4 from '../step-4/Step4';
import Step5Results from '../step-5-results/Step5Results';
import { BREAKPOINTS, COLOURS, SIZES } from '../../../constants';
import { Card, FONTS, Text, ProgressBar } from '../../../components';
import { postJSON, getJSON } from '../../../services/';

const StepFormStyled = styled.form`
  min-height: inherit;
  height: inherit;
  max-height: inherit;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and ${BREAKPOINTS.tablet} {
    display: grid;
    align-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }
  border-radius: ${SIZES.crdBrRd}rem;
`;

const StepFormHeaderStyled = styled.div`
  margin: ${SIZES.spacerSm}rem ${SIZES.spacerXSm}rem;
  > .progress-bar {
    margin-top: ${SIZES.spacerXSm}rem;
  }
`;

const StepForm = () => {
  const [form, setForm] = useState({
    step: 1,
    budgetType: 'monthly',
    budgetMonthlyId: 6,
    budgetFullId: 6,
    milesType: 'daily',
    milesDailyId: 6,
    milesYearlyId: 6,
    // chargingTime: 10,
    chargingLocationId: 1,
  });

  const [carTypes, setCarTypes] = useState(null);
  useEffect(() => {
    getJSON('https://neev.uk/api/cardata').then((response) => {
      setCarTypes(response);
    });
  }, []);

  // carTypes && console.log('carTypes', JSON.stringify(carTypes, null, 2));

  const [carResults, setCarResults] = useState(null);
  // carResults && console.log('carTypes', JSON.stringify(carResults, null, 2));

  const nextStep = () => {
    setForm({
      ...form,
      step: form.step + 1,
    });
  };

  const prevStep = () => {
    setForm({
      ...form,
      step: form.step - 1,
    });
  };

  const skipStep = (skipped1, skipped2) => {
    setForm({
      ...form,
      step: form.step + 1,
      [skipped1]: 'skipped',
      [skipped2]: 'skipped',
    });
  };

  const handleChange = (input) => (e) => {
    if (e.currentTarget) e.preventDefault();
    setForm({
      ...form,
      [input]: e.target ? e.target.value || e.currentTarget.value : e,
    });
  };

  const [currentSlide, setCurrentSlide] = useState(null);

  const tempSelectedCarTypes = ['large', 'standard', 'personal'];

  const postData = (e) => {
    e.preventDefault();
    nextStep();
    return postJSON(
      currentSlide, //carTypes
      form.budgetMonthlyId || form.budgetFullId, // price
      form.milesDailyId || form.milesYearlyId, // range
      form.chargingLocationId // chargetime -- home: 2, local: 5, trips: 10
    ).then((response) => setCarResults(response.results));
  };

  const RANGE_VALUES = {
    budgetMonthly: {
      2: '250',
      4: '450',
      6: '650',
      8: '850',
      10: '1000+',
    },
    budgetFull: {
      2: '25k',
      4: '45k',
      6: '65k',
      8: '85k',
      10: '100k+',
    },
    milesDaily: {
      2: 10,
      4: 30,
      6: 50,
      8: 70,
      10: 100,
    },
    milesYearly: {
      2: 2000,
      4: 6000,
      6: 10000,
      8: 14000,
      10: 18000,
    },
  }; //constants

  const CHARGING_LOCATION = {
    1: 'Home',
    2: 'Local public charging point',
    3: 'Charging points during trips',
  };

  const lastFormStep = 4;
  const isLastFormStep = form.step === lastFormStep;
  const lastStep = 5;
  const isLastStep = form.step === lastStep;

  const CurrentStep = ({ step }) => {
    switch (step) {
      case 1:
        return (
          <Step1
            decrementFormStep={prevStep}
            incrementFormStep={nextStep}
            setCurrentSlide={setCurrentSlide}
            skip={skipStep}
            step={step}
          />
        );
      case 2:
        return (
          <Step2
            decrementFormStep={prevStep}
            incrementFormStep={nextStep}
            handleChange={handleChange}
            skip={skipStep}
            step={step}
            budgetType={form.budgetType}
            budgetMonthlySteps={RANGE_VALUES.budgetMonthly}
            budgetMonthlyId={form.budgetMonthlyId}
            budgetMonthly={RANGE_VALUES.budgetMonthly[form.budgetMonthlyId]}
            budgetFullSteps={RANGE_VALUES.budgetFull}
            budgetFullId={form.budgetFullId}
            budgetFull={RANGE_VALUES.budgetFull[form.budgetFullId]}
          />
        );
      case 3:
        return (
          <Step3
            decrementFormStep={prevStep}
            incrementFormStep={nextStep}
            skip={skipStep}
            step={step}
            handleChange={handleChange}
            milesType={form.milesType}
            milesDailySteps={RANGE_VALUES.milesDaily}
            milesDailyId={form.milesDailyId}
            milesDaily={RANGE_VALUES.milesDaily[form.milesDailyId]}
            milesYearlySteps={RANGE_VALUES.milesYearly}
            milesYearlyId={form.milesYearlyId}
            milesYearly={RANGE_VALUES.milesYearly[form.milesYearlyId]}
          />
        );
      case 4:
        return (
          <Step4
            decrementFormStep={prevStep}
            incrementFormStep={nextStep}
            postData={postData}
            skip={skipStep}
            step={step}
            handleChange={handleChange}
            activeId={JSON.parse(form.chargingLocationId)}
          />
        );
      case lastStep:
        return <Step5Results carTypes={carTypes} carResults={carResults} />;
      default:
        return <p>Something went wrong</p>;
    }
  };

  return (
    <>
      <StepFormHeaderStyled isLastStep={isLastStep}>
        <Text type='h1' colour={COLOURS.white} className='article-header'>
          {!isLastStep ? `Question ${form.step} of 4` : `Your top car matches`}
        </Text>
        {!isLastStep ? (
          <ProgressBar step={form.step} />
        ) : (
          <Text type='body' colour={COLOURS.white} className='small'>
            <span style={{ textDecoration: 'line-through', opacity: '0.25' }}>Change answers/order by matches </span>{' '}
            <span style={{ opacity: '0.25' }}>(coming soon)</span>
          </Text>
        )}
      </StepFormHeaderStyled>
      <Card resultsPage={!isLastStep ? false : true} lastFormStep={isLastFormStep}>
        <StepFormStyled>
          <CurrentStep step={form.step} />
        </StepFormStyled>
      </Card>
      {/* <FormLogger
        formStep={form.step}
        budgetType={form.budgetType}
        budgetMonthly={
          form.budgetMonthlyId === 'skipped' ? 'Not set' : RANGE_VALUES.budgetMonthly[form.budgetMonthlyId]
        }
        budgetFull={form.budgetFullId === 'skipped' ? 'Not set' : RANGE_VALUES.budgetFull[form.budgetFullId]}
        milesType={form.milesType}
        milesDaily={form.milesDailyId === 'skipped' ? 'Not set' : RANGE_VALUES.milesDaily[form.milesDailyId]}
        milesYearly={form.milesYearlyId === 'skipped' ? 'Not set' : RANGE_VALUES.milesYearly[form.milesYearlyId]}
        chargingLocation={CHARGING_LOCATION[form.chargingLocationId]}
      /> */}
    </>
  );
};

export default StepForm;
