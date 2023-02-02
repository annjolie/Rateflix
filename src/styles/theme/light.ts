const light = {
  colors: {
    black: '#221F1F',
    neutral400: '#B2B0BC',
    neutral800: '#2F2D37',
    red: '#E50914',
    primary600: '#B81D24',
    white: '#F5F5F1',
    posterGradient: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://raw.githubusercontent.com/falconmasters/p-gina-estilo-netflix/carousel/img/backdrop.jpg)',
    mainGradient: 'radial-gradient(circle, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
  },
  boxShadow: {
    focusRingPrimary: '0 0 0 0.25rem  #d76d6d',
    dropdown: '0 0.5rem 1.25rem 0.25rem rgba(35, 37, 37, 0.1)',
    dropdownSidebar: '0 0.5rem 1.25rem -0.25rem rgba(0, 0, 0, 0.56)',
    modal: '0px 16px 32px -8px rgba(35, 37, 37, 0.16)',
    XXSmall: '0 1px 3px rgba(15, 15, 35, 0.1)',
    medium: '0px 12px 24px -6px rgba(15, 15, 35, 0.1)',
  },
  transitions: {
    default: 'ease-out 0.2s',
  },
  fonts: {},
  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  zIndex: {
    negative: -1,
    default: 0,
    first: 1,
    second: 2,
  },
};

export default light;
