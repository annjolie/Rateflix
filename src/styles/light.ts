import { addAlpha } from "@/utils/addAlpha";

const white = '#FFFFFF';
const black = '#22223E';
const primary600 = '#00A69B';
const blueGradient = '#009cf4';
const greenGradient = ' #00d6b1';

const light = {
  colors: {
    neutralN000: white,
    neutralN50: '#FAFAFC',
    neutralN100: '#F5F5FB',
    neutralN200: '#E1E1EB',
    neutralN800: black,
    neutralN300: '#BCBCCC',
    neutralN900: '#0F0F23',
    primary100: '#E0F6F3',
    primary500: '#00D6B1',
    primary600,
    primary800: '#007E76',
    white: white,
    textDarkStrong: black,
    blueGradient,
    primary600Weak: addAlpha(primary600, 0.32),
    textDarkWeak: addAlpha(black, 0.24),
    textDarkSubtle: addAlpha(black, 0.56),
    textLightStrong: addAlpha(white, 0.96),
    textLightSubtle: addAlpha(white, 0.64),
    textLightWeak: addAlpha(white, 0.32),
    textLightWeakPlus: addAlpha(white, 0.16),
    avatarBg: addAlpha(white, 0.12),
    textLightWeakSuperPlus: addAlpha(white, 0.08),
    supportRed: '#F3475C',
    supportRedLight: '#FFECEE',
    supportRedDark: '#8E1827',
    secondary100: '#E1F0FF',
    secondary600: '#007DF4',
    secondary800: '#0054A3',
    grey900: '#232525',
    blueGradientOP0: addAlpha(blueGradient, 0),
    blueGradientOP4: addAlpha(blueGradient, 0.4),
    greenGradientOP0: addAlpha(greenGradient, 0),
    greenGradientOP4: addAlpha(greenGradient, 0.4),
  },
  boxShadow: {
    focusRingPrimary: '0 0 0 0.25rem #E0F6F3',
    focusRingGrey: '0 0 0 0.25rem #F5F5FB',
    focusRingError: '0 0 0 0.25rem rgba(243, 71, 92, 0.2)',
    focusRingDestructive: '0 0 0 0.25rem #FFECEE',
    dropdown: '0 0.5rem 1.25rem 0.25rem rgba(35, 37, 37, 0.1)',
    dropdownSidebar: '0 0.5rem 1.25rem -0.25rem rgba(0, 0, 0, 0.56)',
    modal: '0px 16px 32px -8px rgba(35, 37, 37, 0.16)',
    XXSmall: '0 1px 3px rgba(15, 15, 35, 0.1)',
    medium: '0px 12px 24px -6px rgba(15, 15, 35, 0.1)',
  },
  transitions: {
    default: 'ease-out 0.3s',
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
