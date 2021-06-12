import React, { useEffect, useState, useMemo } from 'react';
import { Action, Text, ListItem, Loader } from '../../../components';
import ReactGA from 'react-ga';
// import { useWindowSize } from '../../../hooks/windowResize';

const ResultsCards = ({ carResults, carTypes, budgetType, resultsId, maxPrice = 650 }) => {
  return carResults.map((results) => {
    // const resultItem = carTypes.find((carType) => carType.UID === results.car);
    // const matchRate = Math.round(results.matchRate);
    // if (JSON.parse(resultItem['MonthlyPrice']) <= maxPrice) return <></>;
    // console.log(resultItem['MonthlyPrice']);
    // console.log(resultItem);

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

  console.log('budgetMonthly', budgetMonthly);
  console.log('budgetFull', budgetFull);

  const tempBudgetMonthly = 650;

  //let initialCarResults = null;

  const [cars, setCars] = useState([]);
  const [initialCars, setInitialCars] = useState([]);
  // const [cars200, setCars200] = useState([]);
  // useEffect(() => {
  //   if (carResults) {
  //     if (budgetType === 'monthly') {
  //       const initialCars = carResults.filter((result) => JSON.parse(result['OTR Price']) <= tempBudgetMonthly);
  //       setCars(initialCars);
  //     }
  //   }
  // }, [carResults, budgetType]);

  useEffect(() => {
    if (carResults) {
      console.log('carResults', carResults);
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
        const initialCars = cars.filter((result) => JSON.parse(result['MonthlyPrice']) <= tempBudgetMonthly);
        setInitialCars(initialCars);
      }
    }
  }, [cars, budgetType]);

  // useEffect(() => {
  //   if (carResults) {
  //     if (budgetType === 'monthly') {
  //       setCars(carResults);
  //     }
  //   }
  // }, [carResults, budgetType]);

  // if (carResults) {
  console.log('cars', cars);
  console.log('initialCars', initialCars);
  // if (budgetType === 'monthly') {
  //   // const initialCars = carResults.filter((result) => JSON.parse(result['OTR Price']) <= tempBudgetMonthly);
  //   const initialCars = carResults;
  //   setCars(initialCars);
  // }
  // const [width, height] = useWindowSize();
  // const [isDesktop, setIsDesktop] = useState(null);
  // useEffect(() => {
  //   width > 1000 ? setIsDesktop(true) : setIsDesktop(false);
  // }, [width]);

  const increments = useMemo(() => [0, 200, 300, 400], []);

  const priceIncrements = useMemo(() => [0, 100, 200, 300, 400], []);

  // const [lastIncrement, setLastIncrement] = useState(increments[0]);

  const incrementPrice = (minPrice = tempBudgetMonthly, priceIncrement = priceIncrements[1]) => {
    const newMaxPrice = minPrice + priceIncrement;
    const newCars =
      cars &&
      cars.filter((item) => {
        if (item['MonthlyPrice'] > minPrice && item['MonthlyPrice'] <= newMaxPrice) {
          return item;
        } else {
          return null;
        }
      });
    return newCars;
  };

  // const amount200 = incrementPrice(200).length;
  // const amount300 = incrementPrice(300).length;
  // const amount400 = incrementPrice(400).length;

  const handleMoreCars = (priceIncrement) => {
    const newCars = incrementPrice(priceIncrement);
    setInitialCars([...initialCars, ...newCars]);
  };

  //const [extraAmounts, setExtraAmounts] = useState({});

  // const [amount200, setAmount200] = useState(() => incrementPrice(tempBudgetMonthly, priceIncrements[2]).length);
  // const [amount300, setAmount300] = useState(
  //   () => incrementPrice(tempBudgetMonthly + priceIncrements[2], priceIncrements[1]).length + amount200
  // );
  // const [amount400, setAmount400] = useState(
  //   () => incrementPrice(tempBudgetMonthly + priceIncrements[3], increments[1]).length + amount300
  // );

  const [plus200, setPlus200] = useState([]);
  const [plus300, setPlus300] = useState([]);
  const [plus400, setPlus400] = useState([]);

  // const [amount200, setAmount200] = useState(0);
  // const [amount300, setAmount300] = useState(0);
  // const [amount400, setAmount400] = useState(0);

  useEffect(() => {
    const incrementPrice2 = (minPrice = tempBudgetMonthly, priceIncrement = priceIncrements[1]) => {
      const newMaxPrice = minPrice + priceIncrement;
      const newCars =
        cars &&
        cars.filter((item) => {
          if (item['MonthlyPrice'] > minPrice && item['MonthlyPrice'] <= newMaxPrice) {
            return item;
          } else {
            return null;
          }
        });
      return newCars;
    };

    if (initialCars.length > 0) {
      setPlus200(incrementPrice2(tempBudgetMonthly, priceIncrements[2]));
      setPlus300(incrementPrice2(tempBudgetMonthly + priceIncrements[2], priceIncrements[1]));
      setPlus400(incrementPrice2(tempBudgetMonthly + priceIncrements[3], increments[1]));
    }
  }, [cars, increments, initialCars.length, priceIncrements]);
  // useEffect(() => {
  //   setAmount200(incrementPrice(tempBudgetMonthly, priceIncrements[2]).length);
  //   setAmount300(incrementPrice(tempBudgetMonthly + priceIncrements[2], priceIncrements[1]).length);
  //   setAmount400(incrementPrice(tempBudgetMonthly + priceIncrements[3], increments[1]).length);
  // }, [incrementPrice, increments, priceIncrements]);

  const [show200, setShow200] = useState(true);
  const [show300, setShow300] = useState(true);
  const [show400, setShow400] = useState(true);

  if (initialCars.length > 0) {
    // setAmount200(incrementPrice(tempBudgetMonthly, priceIncrements[2]).length);
    // setAmount300(incrementPrice(tempBudgetMonthly + priceIncrements[2], priceIncrements[1]).length + amount200);
    // setAmount400(incrementPrice(tempBudgetMonthly + priceIncrements[3], increments[1]).length + amount300);
    // const amount200 = incrementPrice(increments[1]).length;
    // const amount300 = incrementPrice(increments[2]).length;
    // const amount400 = incrementPrice(increments[3]).length;

    // const amount200 = incrementPrice(tempBudgetMonthly, priceIncrements[2]).length; // 650 - 850
    // const amount300 = incrementPrice(tempBudgetMonthly + priceIncrements[2], priceIncrements[1]).length + amount200; // 850 - 950
    // const amount400 = incrementPrice(tempBudgetMonthly + priceIncrements[3], increments[1]).length + amount300; // 950 - 1050

    // console.log('200', incrementPrice(tempBudgetMonthly, priceIncrements[2]));
    // console.log('300', incrementPrice(tempBudgetMonthly + priceIncrements[2], priceIncrements[1]));
    // console.log('400', incrementPrice(tempBudgetMonthly + priceIncrements[3], increments[1]));

    const amount200 = plus200.length;
    const amount300 = show200 ? plus300.length + amount200 : plus300.length;
    const amount400 =
      show200 && show300 ? plus400.length + amount300 : show300 ? plus400.length + amount300 : plus400.length;

    console.log('amount200', amount200);
    console.log('amount300', amount300);
    console.log('amount400', amount400);

    console.log('200', plus200);
    console.log('300', plus300);
    console.log('400', plus400);

    return (
      <>
        <ResultsCards carResults={initialCars} carTypes={carTypes} budgetType={budgetType} resultsId={resultsId} />
        {amount200 > 0 && (
          <div>
            <Text>Is your budget flexible?</Text>
            <Text>Get more EV matches by increasing your budget</Text>
            {show200 && amount200 > 0 && (
              <Action
                handleClick={(e) => {
                  e.preventDefault();
                  handleMoreCars(tempBudgetMonthly, priceIncrements[2]);
                  setShow200(false);
                  // setLastIncrement(increments[1]);
                }}>{`+ £200 ${amount200}`}</Action>
            )}
            {show300 && amount300 > 0 && (
              <Action
                handleClick={(e) => {
                  e.preventDefault();

                  let minPrice, increment;
                  if (show200) {
                    minPrice = tempBudgetMonthly; // 650
                    increment = priceIncrements[3]; // 950
                  } else {
                    minPrice = tempBudgetMonthly + priceIncrements[2]; //850
                    increment = priceIncrements[1]; // 950
                  }
                  handleMoreCars(minPrice, increment);
                  setShow200(false);
                  setShow300(false);
                  // setLastIncrement(increments[2]);
                }}>{`+ £300 ${amount300}`}</Action>
            )}
            {/* {show400 && amount400 > 0 && (
              <Action
                handleClick={(e) => {
                  debugger;
                  e.preventDefault();
                  // let minPrice, increment;
                  // debugger;
                  // if (show200) {
                  //   debugger;
                  //   minPrice = tempBudgetMonthly; // 650
                  //   increment = priceIncrements[4]; // 400 (1050)
                  // }
                  // if (show300) {
                  //   debugger;
                  //   minPrice = tempBudgetMonthly + priceIncrements[2]; // 850
                  //   increment = priceIncrements[4] - priceIncrements[2]; //200 (1050)
                  // }
                  // if (!show300 && !show200) {
                  //   debugger;
                  //   minPrice = tempBudgetMonthly + priceIncrements[3]; //950
                  //   increment = priceIncrements[4] - priceIncrements[3]; // 100 (1050)
                  // }
                  // handleMoreCars(minPrice, increment);
                  // setShow200(false);
                  // setShow300(false);
                  // setShow400(false);
                  // setLastIncrement(increments[3]);
                }}>{`+ £400 ${amount400}`}</Action>
            )} */}
          </div>
        )}
      </>
    );
  } else {
    return <Loader />;
  }

  // return <Loader />;
};

export default React.memo(Step5Results);
