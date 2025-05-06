const screenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme = {
  colors: {
    primaryBackground: '#1F1F2E',
    secondaryBackground: '#29293A',
    secondaryBackgroundLight: '#393949',
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0B0',
    highlight: '#bc58ce',
    cardBackground: '#3A3A4D',
    buttonBackground: '#4C4C6E',
    border: '#2D2D3D',
  },
  fonts: {
    primary: "'Roboto Mono', monospace",
    sizes: {
      heading: '18px',
      subheading: '16px',
      body: '14px',
      small: '12px',
      xs: '8px',
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  shadows: {
    subtle: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    strong: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
  device: {
    mobileS: `(min-width: ${screenSizes.mobileS})`,
    mobileM: `(min-width: ${screenSizes.mobileM})`,
    mobileL: `(min-width: ${screenSizes.mobileL})`,
    tablet: `(min-width: ${screenSizes.tablet})`,
    laptop: `(min-width: ${screenSizes.laptop})`,
    laptopL: `(min-width: ${screenSizes.laptopL})`,
    desktop: `(min-width: ${screenSizes.desktop})`,
    desktopL: `(min-width: ${screenSizes.desktop})`,
  },
};

export default theme;
