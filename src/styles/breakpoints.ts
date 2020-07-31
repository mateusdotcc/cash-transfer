const size = {
  mobileS: '320px',
  mobile: '767px',
  tablet: '1024px',
  laptop: '1279px',
  laptopL: '1315px',
  desktop: '1920px',
};

const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet}) and (orientation: portrait)`,
  tabletL: `(max-width: ${size.tablet}) and (orientation: landscape)`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default breakpoints;
