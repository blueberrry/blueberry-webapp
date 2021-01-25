import React, { useState } from 'react';

export const FormValuesContext = React.createContext();

const FormValuesProvider = ({ children }) => {
  const [carType, setCarType] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);

  return (
    <FormValuesContext.Provider
      value={{
        carType: carType,
        currentSlide: currentSlide,
        updateCarType: (value) => setCarType(value),
        updateCurrentSlide: (value) => setCurrentSlide(value),
      }}>
      {children}
    </FormValuesContext.Provider>
  );
};

export default FormValuesProvider;
