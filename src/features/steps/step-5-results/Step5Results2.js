import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Action, Text, ListItem, Loader } from '../../../components';
import ReactGA from 'react-ga';
import { COLOURS, SIZES } from '../../../constants';
// import { useWindowSize } from '../../../hooks/windowResize';

const FullRow = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: ${SIZES.spacerXSm}rem;
`;

const StyledActionsContainer = styled.div`
  margin-top: ${SIZES.spacerSm}rem;
  grid-column-start: 1;
  grid-column-end: 3;
  > button {
    margin-right: ${SIZES.spacerXSm}rem;
  }
`;

const StyledActionText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionText = ({ title, text }) => {
  return (
    <StyledActionText>
      <Text colour={COLOURS.secondary} type='bodySemiBold' className='large'>
        {title}
      </Text>
      <Text colour={COLOURS.primary} type='bodySemiBold' className='small'>
        {text}
      </Text>
    </StyledActionText>
  );
};

const ResultsCards = ({ carResults, budgetType, resultsId }) => {
  return carResults.map((results) => {
    return (
      <ListItem
        key={results.UID}
        matchRate={results.matchRate}
        data={results}
        resultsId={resultsId}
        budgetType={budgetType}
      />
    );
  });
};

const Step5Results = ({ carResults, carTypes, resultsId, budgetType, budgetMonthly, budgetFull }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tempBudgetMonthly = budgetMonthly.figure;

  console.log('budgetMonthly', budgetMonthly);
  console.log('budgetFull', budgetFull);
  console.log('budgetType', budgetType);

  const tempInFull = budgetFull.figure;
  console.log('tempInFull', tempInFull);

  const [cars, setCars] = useState([]);
  const [initialCars, setInitialCars] = useState([]);
  const [carsRemaining200, setCarsRemaining200] = useState([]);
  const [carsRemaining300, setCarsRemaining300] = useState([]);
  const [carsRemaining400, setCarsRemaining400] = useState([]);

  useEffect(() => {
    if (carResults) {
      const mergedCars = carResults.map((results) => {
        const resultItem = carTypes.find((carType) => carType.UID === results.car);
        const matchRate = Math.round(results.matchRate);
        return { ...resultItem, matchRate };
      });
      setCars(mergedCars);
    }
  }, [carResults, carTypes]);

  useEffect(() => {
    if (cars) {
      if (budgetType === 'monthly') {
        const initialCars = cars.filter((item) => JSON.parse(item['MonthlyPrice']) <= tempBudgetMonthly);
        setInitialCars(initialCars);

        const plus200 = cars.filter(
          (item) => item['MonthlyPrice'] > tempBudgetMonthly && item['MonthlyPrice'] <= tempBudgetMonthly + 200
        );
        setCarsRemaining200(plus200);

        const plus300 = cars.filter(
          (item) => item['MonthlyPrice'] > tempBudgetMonthly + 200 && item['MonthlyPrice'] <= tempBudgetMonthly + 300
        );
        setCarsRemaining300(plus300);

        const plus400 = cars.filter(
          (item) => item['MonthlyPrice'] > tempBudgetMonthly + 300 && item['MonthlyPrice'] <= tempBudgetMonthly + 400
        );
        setCarsRemaining400(plus400);
      }
    }
  }, [cars, budgetType, tempBudgetMonthly]);

  useEffect(() => {
    if (cars) {
      console.log('cars', cars);
      if (budgetType === 'inFull') {
        debugger;
        const initialCars = cars.filter((item) => JSON.parse(item['OTR Price']) <= tempInFull);
        setInitialCars(initialCars);

        const plus200 = cars.filter(
          (item) => item['OTR Price'] > tempInFull && JSON.parse(item['OTR Price']) <= tempInFull + 10000
        );
        setCarsRemaining200(plus200);

        const plus300 = cars.filter(
          (item) => item['OTR Price'] > tempInFull + 10000 && JSON.parse(item['OTR Price']) <= tempInFull + 20000
        );
        setCarsRemaining300(plus300);

        const plus400 = cars.filter(
          (item) => item['OTR Price'] > tempInFull + 20000 && JSON.parse(item['OTR Price']) <= tempInFull + 30000
        );
        setCarsRemaining400(plus400);
      }
    }
  }, [cars, budgetType, tempInFull]);

  console.log('initialCars', initialCars);

  console.log('carsRemaining200', carsRemaining200);
  console.log('carsRemaining300', carsRemaining300);
  console.log('carsRemaining400', carsRemaining400);

  const formatActionText = () => {
    let firstIncrementText, secondIncrementText, thirdIncrementText;
    if (budgetType === 'monthly') {
      firstIncrementText = `up to £${tempBudgetMonthly + 200}pm`;
      secondIncrementText = `up to £${tempBudgetMonthly + 300}pm`;
      thirdIncrementText = `up to £${tempBudgetMonthly + 400}pm`;
    }
    if (budgetType === 'inFull') {
      const firstValue = tempInFull + 10000;
      const secondValue = tempInFull + 20000;
      const thirdValue = tempInFull + 30000;
      firstIncrementText = `up to £${firstValue / 1000}k`;
      secondIncrementText = `up to £${secondValue / 1000}k`;
      thirdIncrementText = `up to £${thirdValue / 1000}k`;
    }
    return [firstIncrementText, secondIncrementText, thirdIncrementText];
  };

  const mainActionStyles = { borderRadius: `${SIZES.btnBrRdSm}rem`, marginBottom: `${SIZES.spacerXSm}rem` };

  if (initialCars.length > 0) {
    const totalRemaining200 = carsRemaining200.length;
    const totalRemaining300 = carsRemaining300.length + totalRemaining200;
    const totalRemaining400 = carsRemaining400.length + totalRemaining300;

    // const firstIncrementText = budgetType === 'inFull' ?
    const [firstIncrementText, secondIncrementText, thirdIncrementText] = formatActionText();
    return (
      <>
        <ResultsCards carResults={initialCars} carTypes={carTypes} budgetType={budgetType} resultsId={resultsId} />
        {totalRemaining400 > 0 && (
          <FullRow>
            <Text type='h2' colour={COLOURS.white}>
              Is your budget flexible?
            </Text>
            <Text colour={COLOURS.white} className='medium'>
              Get more EV matches by increasing your budget
            </Text>
            <StyledActionsContainer>
              {totalRemaining200 > 0 && (
                <Action
                  containerStyles={mainActionStyles}
                  handleClick={(e) => {
                    e.preventDefault();
                    setInitialCars([...initialCars, ...carsRemaining200]);
                    setCarsRemaining200([]);
                  }}>
                  <ActionText title={firstIncrementText} text={`${totalRemaining200} more EVs`} />
                </Action>
              )}
              {totalRemaining300 > 0 && (
                <Action
                  containerStyles={mainActionStyles}
                  handleClick={(e) => {
                    e.preventDefault();
                    setInitialCars([...initialCars, ...carsRemaining200, ...carsRemaining300]);
                    setCarsRemaining200([]);
                    setCarsRemaining300([]);
                  }}>
                  <ActionText title={secondIncrementText} text={`${totalRemaining300} more EVs`} />
                </Action>
              )}
              {totalRemaining400 > 0 && (
                <Action
                  containerStyles={mainActionStyles}
                  handleClick={(e) => {
                    e.preventDefault();
                    setInitialCars([...initialCars, ...carsRemaining200, ...carsRemaining300, ...carsRemaining400]);
                    setCarsRemaining200([]);
                    setCarsRemaining300([]);
                    setCarsRemaining400([]);
                  }}>
                  <ActionText title={thirdIncrementText} text={`${totalRemaining400} more EVs`} />
                </Action>
              )}
            </StyledActionsContainer>
          </FullRow>
        )}
      </>
    );
  }
  return <Loader />;
};

export default React.memo(Step5Results);

// todos
// replaceing harcoded 650 with prop producees erroneous results
// budgetFull
// style - flexible needs to be on own row
// style - mobile padding
// potentially match cut off point 80% as variable and configurable
