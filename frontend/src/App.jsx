import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import './styles/App.css'
import LandingPage from './landing/LandingPage';


const theme = createTheme({
  focusRing: 'never',
  fontFamily: 'poppins, sans-serif',
  heading: { fontFamily: 'merriweather, serif' },
  colors: {
    primary: ['#49BBBD'],
    dark: [ '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000'
    ],
  },
});

function App() {

  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      <div >
        <BrowserRouter>
          <Suspense fallback={<div className="text-white text-center mt-20">
            Just a Sec....
            </div>}>
            <LandingPage/>
          </Suspense>
        </BrowserRouter>
      </div>
    </MantineProvider>
  )
}

export default App
