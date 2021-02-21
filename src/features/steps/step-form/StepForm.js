import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FormValuesContext } from '../../../context/FormValuesContext';
import FormLogger from '../../../components/FormLogger';
import Step1 from '../step-1/Step1';
import Step2 from '../step-2/Step2';
import Step3 from '../step-3/Step3';
import Step4 from '../step-4/Step4';
import { BREAKPOINTS, COLOURS, SIZES } from '../../../constants';
import { Card, FONTS, Text, ProgressBar } from '../../../components';
import postJSON from '../../../services/post-json';

const StepFormStyled = styled.form`
  min-height: inherit;
  display: grid;
  grid-template-columns: 1fr;
  align-content: space-between;
  overflow: hidden;
  @media screen and ${BREAKPOINTS.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  border-radius: ${SIZES.crdBrRd}rem;
  > * {
    border: 1px solid red;
  }
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

  const [carResults, setCarResults] = useState(null);

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
    debugger;
    if (e.currentTarget) e.preventDefault();
    setForm({
      ...form,
      [input]: e.target ? e.target.value || e.currentTarget.value : e,
    });
  };

  const tempSelectedCarTypes = ['large', 'standard', 'personal'];

  const postData = (e) => {
    e.preventDefault();
    return postJSON(
      tempSelectedCarTypes, //carTypes
      form.budgetMonthlyId || form.budgetFullId, // price
      form.milesDailyId || form.milesYearlyId, // range
      form.chargingLocationId // chargetime -- home: 2, local: 5, trips: 10
    ).then((response) => setCarResults(response.results));
  };

  const RANGE_VALUES = {
    budgetMonthly: {
      2: 200,
      4: 400,
      6: 600,
      8: 800,
      10: 3000,
    },
    budgetFull: {
      2: 25000,
      4: 45000,
      6: 65000,
      8: 85000,
      10: 100000,
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
  };

  const CHARGING_LOCATION = {
    1: 'Home',
    2: 'Local public charging point',
    3: 'Charging points during trips',
  };

  console.log(JSON.stringify(form, null, 2));
  console.log('car results', JSON.stringify(carResults, null, 2));

  const CurrentStep = ({ step }) => {
    switch (step) {
      case 1:
        return <Step1 decrementFormStep={prevStep} incrementFormStep={nextStep} skip={skipStep} step={step} />;
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
      default:
        return null;
    }
  };

  return (
    <>
      <StepFormHeaderStyled>
        <Text type='h1' colour={COLOURS.white} className='article-header'>
          Question {form.step} of 5
        </Text>
        <ProgressBar />
      </StepFormHeaderStyled>
      <Card>
        <StepFormStyled>
          <CurrentStep step={form.step} />
        </StepFormStyled>
      </Card>
      <FormLogger
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
      />
    </>
  );
};

export default StepForm;
