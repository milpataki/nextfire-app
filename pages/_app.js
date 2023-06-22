import Navbar from '@components/Navbar';
import { UserContext } from '@lib/context';
import '@styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {

  return (
    <UserContext.Provider value={{ user: {}, username: 'jeff' }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;