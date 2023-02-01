import themes from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
