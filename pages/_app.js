// pages/_app.js
/* import Layout from '../app/layout';  // Import the layout component */
import '../app/globals.css';  // Import global CSS
import Dashboard from './dashboard';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
