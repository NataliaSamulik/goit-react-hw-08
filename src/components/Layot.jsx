import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';

const Layot = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layot;
