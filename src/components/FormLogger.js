import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Text from '../components/text/Text';
import { COLOURS } from '../constants';
import { FormValuesContext } from '../context/FormValuesContext';

const FormLogger = ({ formStep, budgetType, budgetMonthly, budgetFull, milesType, milesDaily }) => {
  const formValuesContext = useContext(FormValuesContext);
  return (
    <>
      <div style={{ marginLeft: '1rem' }}>
        <br />
        <br />
        <Text type='bodyBold' colour={COLOURS.white}>
          Form Values
        </Text>
        <br />
        <br />
      </div>
      <div style={{ maxWidth: '100%', marginLeft: '1rem', display: 'grid', 'grid-template-columns': 'repeat(3, 1fr)' }}>
        <div>
          {formValuesContext.carType && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Car Type ID: &nbsp; &nbsp; &nbsp; {formValuesContext.carType} &#125;
            </Text>
          )}
          <br />
          {formValuesContext.carType && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Current Slide Index: &nbsp; &nbsp; &nbsp; {formValuesContext.currentSlide} &#125;
            </Text>
          )}
        </div>
        <div>
          {budgetType && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Budget Type: &nbsp; &nbsp; &nbsp; {budgetType} &#125;
            </Text>
          )}
          <br />
          {budgetMonthly && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Budget Monthly: &nbsp; &nbsp; &nbsp; £{budgetMonthly} &#125;
            </Text>
          )}
          <br />
          {budgetFull && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Budget Full: &nbsp; &nbsp; &nbsp; £{budgetFull} &#125;
            </Text>
          )}
        </div>
        <div>
          {milesType && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Miles Type: &nbsp; &nbsp; &nbsp; {milesType} &#125;
            </Text>
          )}
          <br />
          {milesDaily && (
            <Text type='bodyBold' colour={COLOURS.white}>
              &#123; Miles Daily: &nbsp; &nbsp; &nbsp; {milesDaily} &#125;
            </Text>
          )}
        </div>
      </div>
    </>
  );
};

export default FormLogger;
