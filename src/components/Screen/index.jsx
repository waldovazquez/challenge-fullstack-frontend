import React from 'react';

import NavBar from '../Navbar';

export default function Screen({
  children,
  safe,
}) {
  return (
    <>
      <NavBar />
      <main style={{
        height: safe && '100vh',
      }}
      >
        {children}
      </main>
    </>
  );
}
