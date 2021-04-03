import { COLOURS } from '../constants';

export const fontSvgStyles = {
  display: 'inline-flex',
  alignSelf: 'center',
  height: '1em',
  width: '1em',
  fill: 'currentColor',
  top: '.125em',
  position: 'relative',
};

const svgTheme = {
  primary: COLOURS.primary,
  secondary: COLOURS.secondary,
  light: COLOURS.light,
  dark: COLOURS.dark,
  lightGray: COLOURS.lighterGray,
  lighterGray: COLOURS.lighterGray,
  gray: COLOURS.gray,
  graySecondary: COLOURS.graySecondary,
  black: COLOURS.black,
  white: COLOURS.white,
  danger: COLOURS.danger,
};

export const AppCharging = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    width='36'
    height='48'
    viewBox='0 0 36 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M27.9946 38.3445H27.3725V41.7095C27.3725 44 25.5062 45.8663 23.2157 45.8663H8.9921C8.65277 45.8663 8.37 46.1491 8.37 46.4884C8.37 46.8277 8.65277 47.1105 8.9921 47.1105H23.2157C26.2131 47.1105 28.645 44.6786 28.645 41.6812V37.6941C28.645 38.0617 28.3622 38.3445 27.9946 38.3445Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M0.622105 37.1003H1.24421V8.99247H0.622105C0.282775 8.99247 0 8.70969 0 8.37036V37.7507C0 37.3831 0.282775 37.1003 0.622105 37.1003Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M27.9664 33.4805C27.7119 33.4805 27.4857 33.3391 27.3726 33.0846V37.1H27.9947C28.334 37.1 28.6168 37.3828 28.6168 37.7221V32.8584L28.5319 33.0846C28.4471 33.3108 28.2209 33.4805 27.9664 33.4805Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M0.622105 7.71976H1.24421V5.42928C1.24421 3.1388 3.11052 1.27249 5.401 1.27249H23.1875C25.478 1.27249 27.3443 3.1388 27.3443 5.42928V5.85344C27.5423 5.82516 27.7402 5.82516 27.9382 5.82516C28.1644 5.82516 28.3906 5.82516 28.6168 5.85344V5.42928C28.6451 2.43186 26.185 0 23.2158 0H5.42928C2.43186 0 0 2.43186 0 5.42928V8.37014C0 8.00253 0.282775 7.71976 0.622105 7.71976Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M5.42928 45.8661C3.1388 45.8661 1.27249 43.9998 1.27249 41.7093V38.3443H0.622105C0.282775 38.3443 0 38.0615 0 37.7222V41.7093C0 44.7067 2.43186 47.1386 5.42928 47.1386C5.76861 47.1386 6.05138 46.8558 6.05138 46.5165C6.05138 46.1489 5.76861 45.8661 5.42928 45.8661Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M0.622105 8.99246H1.24421H21.5475C21.9151 8.54002 22.3109 8.11586 22.7634 7.71997H1.24421H0.622105C0.282775 7.71997 0 8.00275 0 8.34208C0 8.70968 0.282775 8.99246 0.622105 8.99246Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M27.9947 37.1001H27.3726H1.24421H0.622105C0.282775 37.1001 0 37.3829 0 37.7222C0 38.0615 0.282775 38.3443 0.622105 38.3443H1.24421H27.3726H27.9947C28.3341 38.3443 28.6168 38.0615 28.6168 37.7222C28.6451 37.3829 28.3623 37.1001 27.9947 37.1001Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M31.0205 6.41902C30.2853 6.13625 29.437 5.93831 28.6169 5.85347C28.3907 5.8252 28.1645 5.8252 27.9382 5.8252C27.7403 5.8252 27.5424 5.8252 27.3444 5.85347C25.676 5.99486 24.036 6.67352 22.7352 7.74806C22.2827 8.11567 21.8586 8.53983 21.5193 9.02055C21.4061 9.19022 21.2648 9.3316 21.1516 9.50127C19.9923 11.2545 19.7095 13.2622 20.2185 15.6375C20.4164 16.5424 20.7275 17.4755 21.1799 18.5218C21.8303 20.0771 22.509 21.6606 23.1594 23.2159C23.5552 24.149 23.9511 25.0822 24.347 26.0153C25.2802 28.2492 26.2416 30.4832 27.1748 32.7171L27.3444 33.1413C27.4575 33.3675 27.6838 33.5371 27.9382 33.5371C28.1927 33.5371 28.419 33.3958 28.5321 33.1413L28.6169 32.915L29.946 29.7762C30.0873 29.4652 29.9177 29.0976 29.6066 28.9562C29.2956 28.8148 28.928 28.9845 28.7866 29.2955L27.9382 31.3032C27.1182 29.3803 26.3264 27.4575 25.5064 25.5629C25.1105 24.6297 24.7146 23.6966 24.3187 22.7634C23.6683 21.2364 23.018 19.6529 22.3393 18.0694C21.9151 17.0796 21.6324 16.2313 21.4627 15.4113C21.0103 13.3753 21.2648 11.7069 22.2262 10.2365C23.4704 8.28534 25.7043 7.06941 27.9665 7.06941C28.8149 7.06941 29.7763 7.26735 30.5681 7.5784C31.3315 7.86117 32.2082 8.51156 32.9151 9.21849C34.0745 10.4344 34.7531 12.1876 34.7248 13.9126C34.6966 15.6092 33.9896 17.1645 33.2261 18.7763C33.0282 19.2287 32.802 19.7094 32.604 20.1902C31.6426 22.5089 30.6529 24.7994 29.6915 27.1182C29.5501 27.4292 29.7197 27.7968 30.0308 27.9382C30.3418 28.0796 30.7094 27.9382 30.8508 27.5989C31.8123 25.2801 32.802 22.9896 33.7634 20.6709C33.9614 20.2184 34.1593 19.766 34.3855 19.3136C35.149 17.6452 35.9408 15.9203 35.9973 13.9408C36.0539 11.8766 35.2338 9.78404 33.8482 8.34189C32.9999 7.49357 31.9537 6.75835 31.0205 6.41902Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M31.2183 13.7431C31.2183 12.8382 30.8507 11.9616 30.2003 11.3112C29.5499 10.6608 28.7016 10.2932 27.7685 10.2932C26.8636 10.2932 25.987 10.6608 25.3366 11.3112C24.6862 11.9616 24.3186 12.8099 24.3186 13.7431C24.3186 14.6479 24.6862 15.5245 25.3366 16.1749C25.987 16.8253 26.8353 17.1646 27.7685 17.1646C28.6733 17.1646 29.5499 16.797 30.2003 16.1467C30.8507 15.5245 31.2183 14.6762 31.2183 13.7431ZM29.9458 13.7431C29.9458 14.3369 29.7196 14.8742 29.3237 15.2701C28.8996 15.6659 28.3623 15.8922 27.7967 15.8922C27.2312 15.8922 26.6656 15.6659 26.2698 15.2701C25.8456 14.8742 25.6476 14.3086 25.6476 13.7431C25.6476 13.1492 25.8739 12.612 26.2698 12.2161C26.6939 11.8202 27.2312 11.594 27.7967 11.594C28.3623 11.594 28.9278 11.8202 29.3237 12.2161C29.7196 12.6402 29.9458 13.1775 29.9458 13.7431Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M17.7299 3.64795H10.7171C10.3777 3.64795 10.095 3.93072 10.095 4.27005C10.095 4.60938 10.3777 4.89216 10.7171 4.89216H17.7299C18.0692 4.89216 18.352 4.60938 18.352 4.27005C18.352 3.93072 18.0692 3.64795 17.7299 3.64795Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M14.4499 43.7454C15.5244 43.7454 16.3728 42.8688 16.3728 41.8225C16.3728 40.748 15.4962 39.8997 14.4499 39.8997C13.3754 39.8997 12.527 40.7763 12.527 41.8225C12.4988 42.8688 13.3754 43.7454 14.4499 43.7454ZM14.4499 41.1439C14.8175 41.1439 15.1286 41.4549 15.1286 41.8225C15.1286 42.1901 14.8175 42.5012 14.4499 42.5012C14.0823 42.5012 13.7712 42.1901 13.7712 41.8225C13.7712 41.4549 14.0823 41.1439 14.4499 41.1439Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
  </svg>
);

export const BackChevron = ({ isFont, colour }) => (
  <svg
    // style={{ ...fontSvgStyles, fill: 'none', marginRight: `${SIZES.spacerUltraSm}rem` }}
    style={isFont && fontSvgStyles}
    viewBox='0 0 11 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.99927 1L2.09637 8.38313L10.1921 15.5543' stroke='currentColor' strokeWidth='2' />
  </svg>
);

export const BrokenHeart = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    width='42'
    height='37'
    viewBox='0 0 42 37'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.4082 31.4561L20.1074 34.8255L22.0034 23.9133L13.9716 16.4857L20.8075 13.122L16.7645 8.71272C15.0036 6.83751 12.3738 5.71008 9.68392 5.81519C4.92244 6.00126 1.32468 9.81727 1.5072 14.4879C1.73102 20.2154 7.16098 24.678 15.3879 31.4394L15.4082 31.4561Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M39.9641 13.7599C41.1721 18.3436 38.6647 21.8554 34.5129 26.2731C31.1149 29.8889 26.9619 32.7238 22.4262 34.7355L26.908 22.9482L21.7616 17.7302L26.5694 14.2833L22.8393 9.17249L26.155 7.18256C31.7856 3.80338 39.0397 7.25857 39.9641 13.7599Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
    />
  </svg>
);

export const Close = ({ isFont, colour }) => (
  <svg
    class='svg-icon'
    // style={{ ...fontSvgStyles, fill: 'none', marginRight: `${SIZES.spacerUltraSm}rem` }}
    style={isFont && fontSvgStyles}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M895.156706 86.256941a30.177882 30.177882 0 0 1 42.767059-0.180706c11.745882 11.745882 11.745882 30.870588-0.180706 42.767059L128.843294 937.743059c-11.866353 11.866353-30.930824 12.047059-42.767059 0.180706-11.745882-11.745882-11.745882-30.870588 0.180706-42.767059L895.156706 86.256941z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path
      d='M86.076235 86.076235c11.745882-11.745882 30.870588-11.745882 42.767059 0.180706l808.899765 808.899765c11.866353 11.866353 12.047059 30.930824 0.180706 42.767059-11.745882 11.745882-30.870588 11.745882-42.767059-0.180706L86.256941 128.843294a30.177882 30.177882 0 0 1-0.180706-42.767059z'
      fill={colour ? svgTheme[colour] : `currentColor`}
    />
    <path d='M0 0h1024v1024H0z' fill='#FFF4F4' fill-opacity='0' />
  </svg>
);

export const DownArrow = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    ariaHidden='true'
    focusable='false'
    dataPrefix='fas'
    dataIcon='angle-down'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 320 512'>
    <path
      fill={colour ? svgTheme[colour] : `currentColor`}
      d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'></path>
  </svg>
);

export const FeedbackDelete = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    width='18'
    height='17'
    viewBox='0 0 18 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.9298 1L9.06122 8.35111L17.1218 15.4912'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      stroke-width='2.5'
    />
    <path
      d='M1.19196 1L9.06057 8.35111L0.999992 15.4912'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      stroke-width='2.5'
    />
  </svg>
);

export const Home = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    width='40'
    height='38'
    viewBox='0 0 40 38'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M36.4384 37.2946H3.78734C3.54843 37.2946 3.38916 37.1353 3.38916 36.8964V15.4741C3.38916 15.2352 3.54843 15.0759 3.78734 15.0759C4.02625 15.0759 4.18553 15.2352 4.18553 15.4741V36.4982H36.0402V15.4741C36.0402 15.2352 36.1995 15.0759 36.4384 15.0759C36.6773 15.0759 36.8366 15.2352 36.8366 15.4741V36.8964C36.8366 37.0557 36.5977 37.2946 36.4384 37.2946Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M2.19455 16.7482C1.95564 16.7482 1.79637 16.6685 1.63709 16.5889C1.15927 16.35 1 15.9518 1 15.5536V13.4831C1 13.0849 1.23891 12.6867 1.55746 12.4478L19.8739 1.05973C20.0332 0.980091 20.1924 0.980091 20.2721 1.05973L38.5885 12.3681C38.9071 12.6071 39.146 13.0052 39.146 13.4034V15.5536C39.146 16.0314 38.9071 16.35 38.5089 16.5889C38.1107 16.8278 37.7125 16.8278 37.3143 16.5889L20.1128 5.83793L2.75201 16.5093C2.59273 16.6685 2.35382 16.7482 2.19455 16.7482ZM20.1128 1.85609L1.95564 13.0052C1.876 13.0849 1.79637 13.2441 1.79637 13.3238V15.5536C1.79637 15.7925 1.95564 15.8722 2.03528 15.8722C2.11491 15.8722 2.27419 15.9518 2.43346 15.8722L19.8739 5.04156C20.0332 4.96193 20.1924 4.96193 20.2721 5.04156L37.7922 15.8722C37.9514 15.9518 38.1107 15.9518 38.1903 15.8722C38.27 15.8722 38.4293 15.7129 38.4293 15.5536V13.4831C38.4293 13.3238 38.3496 13.2441 38.27 13.1645L20.1128 1.85609Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M34.0493 10.3771C33.8104 10.3771 33.6511 10.2178 33.6511 9.97893V3.8469H29.6693V7.11201C29.6693 7.35092 29.51 7.51019 29.2711 7.51019C29.0322 7.51019 28.8729 7.35092 28.8729 7.11201V3.44872C28.8729 3.20981 29.0322 3.05054 29.2711 3.05054H34.0493C34.2882 3.05054 34.4475 3.20981 34.4475 3.44872V9.97893C34.4475 10.2178 34.2086 10.3771 34.0493 10.3771Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M18.9183 37.2945H9.36193C9.12302 37.2945 8.96375 37.1352 8.96375 36.8963V18.5798C8.96375 18.3409 9.12302 18.1816 9.36193 18.1816H18.9183C19.1572 18.1816 19.3165 18.3409 19.3165 18.5798V36.8963C19.3165 37.0555 19.0776 37.2945 18.9183 37.2945ZM9.76011 36.4981H18.5202V18.978H9.76011V36.4981Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M32.4565 27.738H22.9001C22.6612 27.738 22.502 27.5788 22.502 27.3398V17.7834C22.502 17.5445 22.6612 17.3853 22.9001 17.3853H32.4565C32.6955 17.3853 32.8547 17.5445 32.8547 17.7834V27.3398C32.8547 27.4991 32.6158 27.738 32.4565 27.738ZM23.2983 26.9417H32.0584V18.1816H23.2983V26.9417V26.9417Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M27.6783 27.738C27.4394 27.738 27.2802 27.5788 27.2802 27.3398V17.7834C27.2802 17.5445 27.4394 17.3853 27.6783 17.3853C27.9172 17.3853 28.0765 17.5445 28.0765 17.7834V27.3398C28.0765 27.4991 27.8376 27.738 27.6783 27.738Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M32.4565 22.9597H22.9001C22.6612 22.9597 22.502 22.8004 22.502 22.5615C22.502 22.3226 22.6612 22.1633 22.9001 22.1633H32.4565C32.6955 22.1633 32.8547 22.3226 32.8547 22.5615C32.8547 22.8004 32.6158 22.9597 32.4565 22.9597Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
    <path
      d='M16.5292 28.5344C16.7491 28.5344 16.9273 28.3561 16.9273 28.1362C16.9273 27.9163 16.7491 27.738 16.5292 27.738C16.3093 27.738 16.131 27.9163 16.131 28.1362C16.131 28.3561 16.3093 28.5344 16.5292 28.5344Z'
      fill={colour ? svgTheme[colour] : `currentColor`}
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='0.2'
      strokeMiterlimit='10'
    />
  </svg>
);

export const ToolTip = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    width='24'
    height='26'
    viewBox='0 0 24 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect width='24' height='24' rx='12' fill={colour ? svgTheme[colour] : `currentColor`} />
    <path
      d='M11.952 8.584C11.5376 8.584 11.1904 8.4552 10.9104 8.1976C10.6416 7.9288 10.5072 7.5984 10.5072 7.2064C10.5072 6.8144 10.6416 6.4896 10.9104 6.232C11.1904 5.9632 11.5376 5.8288 11.952 5.8288C12.3664 5.8288 12.708 5.9632 12.9768 6.232C13.2568 6.4896 13.3968 6.8144 13.3968 7.2064C13.3968 7.5984 13.2568 7.9288 12.9768 8.1976C12.708 8.4552 12.3664 8.584 11.952 8.584ZM13.1112 9.6928V19H10.7592V9.6928H13.1112Z'
      fill='white'
    />
  </svg>
);

export const Speach = ({ isFont, colour }) => (
  <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.7177 6.2085L4.2439 6.2085' stroke='#2C3D55' stroke-linecap='round' />
    <path d='M10.4877 9.27783L4.2439 9.27783' stroke='#2C3D55' stroke-linecap='round' />
    <path
      d='M16.7315 1.09277L16.7315 14.3937H9.59566L4.2438 18.4863L4.2438 14.3937H0.675903L0.675903 1.09277L16.7315 1.09277Z'
      stroke='#2C3D55'
      stroke-linejoin='round'
    />
  </svg>
);

export const RoadSide = ({ isFont, colour }) => (
  <svg width='35' height='38' viewBox='0 0 35 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M26.6666 1L34 36.4444'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
      strokeLinecap='round'
    />
    <path
      d='M18.1111 34.6112V26.0557'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
    />
    <path
      d='M18.1111 19.3333V12'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
    />
    <path
      d='M18.1111 6.49992V2.83325'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
    />
    <path
      d='M14.4444 18.1111C14.4444 14.3834 11.45 11.3889 7.72222 11.3889C3.99444 11.3889 1 14.3834 1 18.1111C1 24.2222 7.72222 29.7222 7.72222 29.7222C7.72222 29.7222 14.4444 24.2222 14.4444 18.1111Z'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
    />
    <path
      d='M7.72218 21.1668C9.40972 21.1668 10.7777 19.7988 10.7777 18.1112C10.7777 16.4237 9.40972 15.0557 7.72218 15.0557C6.03464 15.0557 4.66663 16.4237 4.66663 18.1112C4.66663 19.7988 6.03464 21.1668 7.72218 21.1668Z'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
    />
    <path
      d='M7.90564 8.94444L9.55564 1'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
      strokeLinecap='round'
    />
    <path
      d='M2.22217 36.4445L3.68883 29.2334'
      stroke={colour ? svgTheme[colour] : `currentColor`}
      strokeWidth='1.2'
      strokeMiterlimit='10'
      strokeLinecap='round'
    />
  </svg>
);

export const UpArrow = ({ isFont, colour }) => (
  <svg
    style={isFont && fontSvgStyles}
    ariaHidden='true'
    focusable='false'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 320 512'>
    <path
      fill={colour ? svgTheme[colour] : `currentColor`}
      d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z'></path>
  </svg>
);
