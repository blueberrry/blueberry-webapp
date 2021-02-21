export const RESETS = {
  btnReset: `
    outline: none;
    border: none;
    box-shadow: none;
  `,
  rangeReset: `
    input[type=range] {
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      width: 100%; /* Specific width is required for Firefox. */
      background: transparent; /* Otherwise white in Chrome */
    }    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }    
    input[type=range]:focus {
      outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }   
    input[type=range]::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent; 
      border-color: transparent;
      color: transparent;
    }
  `,
};