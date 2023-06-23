import Navbar from '@components/Navbar';
import { UserContext } from '@lib/context';
import '@styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react';
import { useUserData } from '@lib/hooks';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;